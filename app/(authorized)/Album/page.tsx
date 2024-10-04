"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import SearchComponent from "@/app/Components/SearchComponent/SearchComponent";
import AntTable from "@/app/Components/AntTable/Table";
import SecondaryButton from "@/app/Components/Buttons/SecondaryButton/SecondaryButton";
import axios from "axios";
import { getCookie } from "@/helpers/cookies";
import { useRecoilState } from "recoil";
import { activeAsideMenuId, search } from "@/app/states";
import { jwtDecode } from 'jwt-decode';
import InfoPopUp from "@/app/Components/Pop-ups/ErrorPop-up/InfoPop-ups";
import MainPopUp from "@/app/Components/Pop-ups/MainPop-up/MainPop-up";
import { findAlbumName, findAlbumsIds } from "@/helpers/dataAction";
import { useRouter } from "next/navigation";
import Button from "@/app/Components/Buttons/PrimaryButton/primaryButtons";
import Link from "next/link";

export interface AlbumInfo {
  id: number;
  title: string;
  releaseDate: string;
  description: string;
  imageUrl: string;
  musics: {
    id: number;
    name: string;
    duration: number;
    imageUrl: string;
    albumId: number;
    authors: {
      id: number;
      firstName: string;
      lastName: string;
      biography: string;
      imageUrl: string;
    }[]
  }[];
  authors: {
    id: number;
    firstName: string;
    lastName: string;
    biography: string;
    imageUrl: string;
  }[];
}

export interface Music {
  id: number;
  name: string;
  duration: number;
  imageUrl: string;
  albumId: number;
  authors: {
    id: number;
    firstName: string;
    lastName: string;
    biography: string;
    imageUrl: string;
  }[]
}

const Album = () => {
  const [albums, setAlbums] = useState<AlbumInfo[]>()
  const token = getCookie('token')
  const [activeAside, setActiveAside] = useRecoilState(activeAsideMenuId);
  const [editAlbumId, setEditAlbumId] = useState<number | null>()
  const [albumId, setAlbumId] = useState(0)
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorType, setErrorType] = useState<'success' | 'error'>();
  const [showErrorPopUp, setShowErrorPopUp] = useState(false)
  const [showDeletePopUp, setShowDeletePopUp] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setActiveAside(3);
  }, [])

  const getAlbumData = async () => {
    try {
      const response = await axios.get('https://merodibackend-2.onrender.com/album', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.role == 'admin') {
          setAlbums(response.data)
        } else if (decodedToken.role == 'user') {
          alert(`You Are Not Admin`)
        }
      }
    }
    catch (error) {
    }
  }

  useEffect(() => {
    if (token) {
      getAlbumData()
    }
  }, [])

  const onSubmitDeleteClick = (id: number) => {
    axios.delete(`https://merodibackend-2.onrender.com/album/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setErrorMessage(`Album ${res.data.title} Deleted`)
        setErrorType('success')
        getAlbumData();
      })
      .catch((err) => {
        setErrorMessage('Operation failed. Please try again')
        setErrorType('error')
      })
      .finally(() => {
        setShowDeletePopUp(false);
        setShowErrorPopUp(true)
      })
  }

  const onAddAlbumClick = () => {
    router.push('/Album/AddAlbum')
  }

  const onEditClick = () => {
    router.push(`/Album/AddAlbum?id=${editAlbumId}`)
  }

  useEffect(() => {
    if (editAlbumId) {
      onEditClick();
    }
  }, [editAlbumId])

  const onChoosenItemsClick = (choosenItemsKeys: React.Key[]) => {
    if (albums) {
      const deleteArtistsIds = findAlbumsIds(choosenItemsKeys, albums);
      for (let i = 0; i < deleteArtistsIds.length; i++) {
        onSubmitDeleteClick(deleteArtistsIds[i])
      }
    }
  }

  const [searchQuery] = useRecoilState(search)

  const onSearchChange = async () => {
    try {
      const response = await axios.get(`https://merodibackend-2.onrender.com/search?query=${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setAlbums(response.data.albums)
    }
    catch (err) {

    }
  }

  useEffect(() => {
    onSearchChange()
  }, [searchQuery])

  return (<>
    {showErrorPopUp && <div className={styles.errorPopUp}>
      <InfoPopUp message={errorMessage} type={errorType} />
    </div>}
    {albums && <div className={showDeletePopUp ? styles.popUpWrapper : styles.popUp}>
      <div className={showDeletePopUp ? styles.showPopUp : styles.hiddePopUp}>
        <MainPopUp id={albumId} title={"Delete Artist"} message={"Are you sure you want to delete"} target={findAlbumName(albumId, albums)} buttonTitle={"Delete"} onCancelClick={() => setShowDeletePopUp(false)} onSubmitClick={onSubmitDeleteClick} />
      </div>
    </div>}
    {albums && <div className={styles.container}>
      <div className={styles.headerBox}>
        <SearchComponent />

        <Button title={"Add Album"} onClick={onAddAlbumClick} />
      </div>

      <AntTable
        onChoosenItemsClick={onChoosenItemsClick}
        columns={[
          {
            title: 'Album Name',
            dataIndex: 'albumName',
            width: 330
          },
          {
            title: "Artist Name",
            dataIndex: "artistName",
            width: 368
          },
          {
            title: "Date of release",
            dataIndex: "dateofrelease",
            width: 316
          },
        ]}
        dataSource={
          albums.map((item, index) => {
            return {
              key: index + 1,
              albumName: <div className={styles.albumCoverBox}>
                <img src={item.imageUrl} alt="album cover" width={32} height={32} className={styles.albumCover} />
                <Link className={styles.link} href={`/Album/AlbumSongs?id=${item.id}`}><span>{item.title}</span></Link>
              </div>,
              // artistName: item.authors.map((item) => `${item.firstName} ${item.lastName}`).join(),
              dateofrelease: item.releaseDate,
              edit: <Image src={"/icons/editIcon.svg"} alt="edit" width={24} height={24} onClick={() => setEditAlbumId(item.id)} />,
              action: <Image onClick={() => {
                setAlbumId(item.id)
                setShowDeletePopUp(true)
                setShowErrorPopUp(false);
              }} src={"/icons/trash.svg"} alt="block" width={24} height={24} />
            }
          })
        }
      />
    </div>}</>
  );
};

export default Album;
