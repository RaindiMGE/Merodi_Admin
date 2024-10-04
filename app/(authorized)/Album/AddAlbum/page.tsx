"use client";

import AddInfoModel, { FormValues } from "@/app/Components/AddInfoModel/AddInfoModel";
import { activeAsideMenuId, artistInfo } from "@/app/states";
import { Suspense, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styles from './page.module.scss';
import axios from "axios";
import { getCookie } from "@/helpers/cookies";
import { useRouter, useSearchParams } from "next/navigation";
import { AlbumInfo } from "../page";
import InfoPopUp from "@/app/Components/Pop-ups/ErrorPop-up/InfoPop-ups";
import { ArtistInfo } from "../../Artist/page";
import { SassNumber } from "sass";

export interface UploadedFileInfo {
  id: number;
  url: string;
}

const AddAlbum = () => {
  return <Suspense>
    <AddAlbumContent />
  </Suspense>
};

const AddAlbumContent = () => {
  const [activeAside, setActiveAside] = useRecoilState(activeAsideMenuId);
  const token = getCookie('token')
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  const [id, setId] = useState<null | string>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorType, setErrorType] = useState<'success' | 'error'>();
  const [showErrorPopUp, setShowErrorPopUp] = useState(false)
  const [albumInfo, setAlbumInfo] = useState<AlbumInfo>()

  useEffect(() => {
    setActiveAside(3);
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && searchParams) {
      setId(searchParams.get('id'))
    }
  }, [searchParams, isMounted])

  const editedInfoUpload = async (data: FormValues) => {
    setShowErrorPopUp(false)
    const formData = new FormData()
    formData.append('file', data.file[0])
    if(data.file[0]) {
      axios.post(`https://merodibackend-2.onrender.com/files/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })
        .then((res) => {
          const file: UploadedFileInfo = res.data;
          addEditedInfoToServer(data, file.id);
        })
        .catch((err) => {
          setErrorMessage('Operation failed. Please try again')
          setErrorType('error')
          setShowErrorPopUp(true)
        })
    }
    else {
      getData(data);
    }
  }

  const getData = (data: FormValues) => {
    const artists = data.artistName.split(', ')
    const newData = {
      title: data.albumName ? data.albumName : null,
      releaseDate: data.date ? data.date : null,
      authors: data.artistName ? artists : null,
      description: data.biography ? data.biography : null,
      image: data.file ? 0 : null,
    }
    axios.patch(`https://merodibackend-2.onrender.com/album/${id}`, newData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        const album: AlbumInfo = res.data
        setErrorMessage(`Album Updated`)
        setErrorType('success')
        router.push(`/Album/AlbumSongs?id=${album.id}`)
      })
      .catch((err) => {
        setErrorMessage('Operation failed. Please try again')
        setErrorType('error')
        setShowErrorPopUp(true)
      })
      .finally(() => {
        setShowErrorPopUp(true)
      })
  }

  const getAlbumData = async (id: number) => {
    try {
      const response = await axios.get(`https://merodibackend-2.onrender.com/album/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setAlbumInfo(response.data)
    }
    catch (err) {
      
    }
  }

  useEffect(() => {
    if(id) {
      getAlbumData(Number(id))
    }
  }, [id])

  const addEditedInfoToServer = (data: FormValues, fileId: number) => {
    const artists = data.artistName.split(', ')
    const newData = {
      title: data.albumName ? data.albumName : null,
      releaseDate: data.date ? data.date : null,
      authors: artists.length !== 0 ? artists : null,
      description: data.biography ? data.biography : null,
      imageId: fileId
    }
    axios.patch(`https://merodibackend-2.onrender.com/album/${id}`, newData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        const album: AlbumInfo = res.data
        setErrorMessage(`Album Updated`)
        setErrorType('success')
        router.push(`/Album/AlbumSongs?id=${album.id}`)
      })
      .catch((err) => {
        setErrorMessage('Operation failed. Please try again')
        setErrorType('error')
        setShowErrorPopUp(true)
      })
      .finally(() => {
        setShowErrorPopUp(true)
      })
  }

  const addInfoOnServer = async (data: FormValues, fileId: number) => {
    const artists = data.artistName.split(', ')
    const newData = {
      authors: artists,
      title: data.albumName,
      releaseDate: data.date,
      description: data.biography,
      imageId: fileId
    }

    try {
      const response = await axios.post('https://merodibackend-2.onrender.com/album', newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(response.status)
      const albumInfo: AlbumInfo = response.data
      router.push(`/Album/AlbumSongs?id=${albumInfo.id}`)
    }
    catch (error: any) {
      setErrorMessage('Operation failed. Please try again')
      setErrorType('error')
      setShowErrorPopUp(true)
    }
  }

  const onSubmit = async (data: FormValues) => {
    setShowErrorPopUp(false)
    const formData = new FormData()
    formData.append('file', data.file[0])
    axios.post('https://merodibackend-2.onrender.com/files/upload', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(async (res) => {
        const file: UploadedFileInfo = res.data
        await addInfoOnServer(data, file.id)
      })
      .catch((err) => {
        setErrorMessage('Operation failed. Please try again')
        setErrorType('error')
        setShowErrorPopUp(true)
      })

  }

  const firstOnSubmit = (data: FormValues) => {
    if (id) {
      editedInfoUpload(data)
    } else {
      onSubmit(data)
    }
  }

  const onCancelClick = () => {
    router.push('/Album')
  }

  return (<>
    {showErrorPopUp && <div className={styles.errorPopUp}>
      <InfoPopUp message={errorMessage} type={errorType} />
    </div>}
    <div className={styles.container}>
      {albumInfo ? <AddInfoModel data={{
        artistName: albumInfo.authors.map((item) => `${item.firstName} ${item.lastName}`).join(', '),
        albumName: albumInfo.title,
        date: albumInfo.releaseDate,
        biography: albumInfo.description,
        file: albumInfo.imageUrl, 
      }} isAlbumInfo onCancelClick={onCancelClick} onSubmit={firstOnSubmit} /> : <AddInfoModel isAlbumInfo onCancelClick={onCancelClick} onSubmit={firstOnSubmit} />}
    </div></>
  );
} 

export default AddAlbum;