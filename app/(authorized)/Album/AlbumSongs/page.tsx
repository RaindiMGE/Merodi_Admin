"use client";

import AddSongs, { MusicInfo } from "@/app/Components/AddSongs/addSongs";
import AntTable from "@/app/Components/AntTable/Table";
import Button from "@/app/Components/Buttons/PrimaryButton/primaryButtons";
import SearchComponent from "@/app/Components/SearchComponent/SearchComponent";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import { useRecoilState } from "recoil";
import { activeAsideMenuId } from "@/app/states";
import { getCookie } from "@/helpers/cookies";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { AlbumInfo, Music } from "../page";
import InfoPopUp from "@/app/Components/Pop-ups/ErrorPop-up/InfoPop-ups";
import MainPopUp from "@/app/Components/Pop-ups/MainPop-up/MainPop-up";
import { findMusicName, findMusicsIds, findSearch } from "@/helpers/dataAction";

const AlbumSongs = () => {
  return <Suspense>
    <AlbumSongContent />
  </Suspense>
};

interface UploadedFileInfo {
  id: number;
  url: string;
}

const AlbumSongContent = () => {

  const [showAddSong, setAddSong] = useState(false);
  const [activeAside, setActiveAside] = useRecoilState(activeAsideMenuId);
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  const [id, setId] = useState<null | string>(null);
  const token = getCookie('token')
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorType, setErrorType] = useState<'success' | 'error'>();
  const [showErrorPopUp, setShowErrorPopUp] = useState(false)
  const [musics, setMusics] = useState<AlbumInfo>()
  const [showAskPopUp, setShowAskPopUp] = useState(false)
  const [musicId, setMusicId] = useState(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && searchParams) {
      setId(searchParams.get('id'))
    } 
  }, [searchParams, isMounted])

  const getAlbumData = async () => {
    try {
      const response = await axios.get(`https://merodibackend-2.onrender.com/album/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setMusics(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const [songId, setSongId] = useState<number>()
  const [imageId, setImageId] = useState<number>()

  const cancelAddSongClick = () => {
    setAddSong(false);
  }

  useEffect(() => {
    if (id) {
      getAlbumData()
    }
  }, [id])

  useEffect(() => {
    setActiveAside(3);
  }, [])

  const addMusicOnServer = async (data: MusicInfo, imageId: number, songId: number) => {

    const newData = {
      name: data.title,
      duration: 120,
      fileIdForUrl: songId,
      imageId: imageId,
      albumId: Number(id),
      authors: musics?.authors.map((item) => item.id),
    }
    

    try {
      const response = await axios.post('https://merodibackend-2.onrender.com/music', newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      if (id !== null) {
        getAlbumData()
      }
      setErrorMessage('Music Added')
      setErrorType("success")
    }
    catch (err) {
      setErrorMessage('Operation Failed. Please Try Again')
      setErrorType('error')
    }
    finally {
      setAddSong(false)
      setShowErrorPopUp(true)
    }
  }

  const audioRef = useRef<HTMLAudioElement>(null);

  const getMusicDuration = async (id: number) => {
    try {
      const response = await axios.get(`https://merodibackend-2.onrender.com/files/231`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const music: UploadedFileInfo = response.data
      console.log('rame')
      const audio = audioRef.current;
      // if (!audio) {
      //   console.log('vinme')
      //   return
      // }
    } catch (err)  {
      console.log(err)
    }
  }

  const getImageId = async (id: number, data: MusicInfo) => {
    const imageData = new FormData()
    imageData.append('file', data.image[0])

    try {
      const response = await axios.post('https://merodibackend-2.onrender.com/files/upload', imageData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })

      const file: UploadedFileInfo = response.data;
      await addMusicOnServer(data, file.id, id)
      setAddSong(false)
    }
    catch (err) {
      setShowErrorPopUp(false)
      setAddSong(false)
      setErrorMessage('Operation Failed. Please Try Again')
      setErrorType('error')
    }
  }

  const onAddSongClick = async (data: MusicInfo) => {
    const songData = new FormData()
    songData.append('file', data.song[0])

    try {
      const response = await axios.post('https://merodibackend-2.onrender.com/files/upload', songData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })
      const file: UploadedFileInfo = response.data;
      await getMusicDuration(file.id)
      await getImageId(file.id, data)
    }
    catch (err) {
      setShowErrorPopUp(false)
      setAddSong(false)
      setErrorMessage('Operation Failed. Please Try Again')
      setErrorType('error')
    }
  }

  const onSubmitDeleteClick = (musicId: number) => {
    axios.delete(`https://merodibackend-2.onrender.com/music/${musicId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        if (res.status === 200) {
          setErrorMessage('Music deleted successfully');
          setErrorType('success');
        }
        getAlbumData()
      })
      .catch((error) => {
        setErrorMessage('Operation failed. Please try again');
        setErrorType('error');
      })
      .finally(() => {
        setShowErrorPopUp(true)
        setShowAskPopUp(false)
      })
  }

  const onChoosenItemsClick = (choosenItemsKeys: React.Key[]) => {
    if (musics) {
      const deleteArtistsIds = findMusicsIds(choosenItemsKeys, musics);
      for (let i = 0; i < deleteArtistsIds.length; i++) {
        onSubmitDeleteClick(deleteArtistsIds[i])
      }
    }
  }

  const [music, setMusic] = useState<Music[]>()

  const onSearchChange = async (e: any) => {
    try {
      const response = await axios.get(`https://merodibackend-2.onrender.com/search?query=${e.target.value}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setMusic(findSearch(Number(id), response.data.musics))
    }
    catch (err) {

    }
  }

  return (
    <>
      {showErrorPopUp && <div className={styles.errorPopUp}>
        <InfoPopUp message={errorMessage} type={errorType} />
      </div>}
      <div className={showAddSong ? styles.popUpWrapper : styles.popUp}>
        <div className={showAddSong ? styles.showPopUp : styles.hiddePopUp}>
          <AddSongs userId={""} onCancelClick={() => setAddSong(false)} onSubmitClick={onAddSongClick} />
        </div>
      </div>
      <div className={showAskPopUp ? styles.popUpWrapper : styles.popUp}>
        <div className={showAskPopUp ? styles.showAskPopUp : styles.hiddeAskPopUp}>
          {musics && <MainPopUp id={musicId} title={"Delete Music"} message={"Are you sure you want to delete"} target={findMusicName(musicId, musics)} buttonTitle={"Submit"} onCancelClick={() => {
            setShowAskPopUp(false)
          }} onSubmitClick={onSubmitDeleteClick} />}
        </div>
      </div>
      {musics && <div className={styles.container}>
        <div className={styles.headerBox}>
          <SearchComponent onChange={onSearchChange} />
          <div className={styles.addSongsPop}>
            <Button title={"Add Song"} onClick={() => {
              setShowErrorPopUp(false)
              setAddSong(true)
            }} />
          </div>
        </div>

        <AntTable onChoosenItemsClick={onChoosenItemsClick}
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              width: 250,
            },
            {
              title: "Artist",
              dataIndex: "artist",
            },
            {
              title: "Listen",
              dataIndex: "listen",
            },
            {
              title: "Duration",
              dataIndex: "duration",
            },
          ]}
          dataSource={music ? music.map((item, index) => {
            return {
              key: index,
              name: <div className={styles.musicName}>
                <span>{index + 1}</span>
                <span>{item.name}</span>
              </div>,
              artist: item.authors.map((item) => `${item.firstName} ${item.lastName}`).join(),
              listen: `${item.playCount}`,
              duration: `${item.duration}`,
              action: (
                <Image
                  onClick={() => {
                    setShowErrorPopUp(false)
                    setShowAskPopUp(true)
                    setMusicId(item.id)
                  }}
                  src={"/icons/trash.svg"}
                  alt="block"
                  width={24}
                  height={24}
                />
              ),
            }
          }) : musics.musics.map((item, index) => {
            return {
              key: index,
              name: <div className={styles.musicName}>
                <span>{index + 1}</span>
                <span>{item.name}</span>
              </div>,
              artist: item.authors.map((item) => `${item.firstName} ${item.lastName}`).join(),
              listen: `${item.playCount}`,
              duration: `${item.duration}`,
              action: (
                <Image
                  onClick={() => {
                    setShowErrorPopUp(false)
                    setShowAskPopUp(true)
                    setMusicId(item.id)
                  }}
                  src={"/icons/trash.svg"}
                  alt="block"
                  width={24}
                  height={24}
                />
              ),
            }
          })}
        />
      </div>} </>
  );
}

export default AlbumSongs;
