'use client'

import styles from './page.module.scss';
import Search from "../../Components/SearchComponent/SearchComponent"
import PopUps from '../../Components/Pop-ups/MainPop-up/MainPop-up';
import { useEffect, useState } from 'react';
import AntTable from '../../Components/AntTable/Table';
import Image from 'next/image';
import { Span } from 'next/dist/trace';
import ErrorPopUp from "../../Components/Pop-ups/ErrorPop-up/InfoPop-ups"
import axios from 'axios';
import { message } from 'antd';
import { getCookie } from '@/helpers/cookies';
import { jwtDecode } from 'jwt-decode';
import { findPLaylistIds, findPlaylistTitle } from '@/helpers/dataAction';
import { useRecoilState } from 'recoil';
import { activeAsideMenuId } from '@/app/states';

export interface PlaylistInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  musics: {
    id: number;
    name: string;
    duration: number;
    imageUrl: string;
    albumId: number;
  }[];
  user: [
    {
      id: number;
      email: string;
    }
  ]
}

export default function Home() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorType, setErrorType] = useState<'success' | 'error'>();
  const [showErrorPopUp, setShowErrorPopUp] = useState(false)
  const [playlists, setPlaylists] = useState<PlaylistInfo[]>([])
  const [showPopUp, setShowPopUp] = useState(false)
  const [playlistId, setPlaylistId] = useState(0);
  const token = getCookie('token');
  const [activeAside, setActiveAside] = useRecoilState(activeAsideMenuId);

  useEffect(() => {
    setActiveAside(4);
  }, [])

  const getPlaylistData = async () => {
    try {
      const response = await axios.get('https://merodibackend-2.onrender.com/playlist', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.role == 'admin') {
          setPlaylists(response.data)
        } else if (decodedToken.role == 'user') {
          alert(`You Are Not Admin`)
          return;
        }
      }
    }
    catch (err) {
      alert('Error')
    }
  }

  useEffect(() => {
    getPlaylistData()
  }, [])

  const deletePlaylist = (id: number) => {
    axios.delete(`https://merodibackend-2.onrender.com/playlist/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        if (res.status === 200) {
          setErrorMessage('Playlist deleted successfully');
          setShowPopUp(false)
          setErrorType('success');
          getPlaylistData()
        }
      })
      .catch((error) => {
        setErrorMessage('Operation failed. Please try again');
        setErrorType('error');
        setShowPopUp(false);
      })
      .finally(() => {
        setShowErrorPopUp(true)
      })
  };

  const onChoosenItemsClick = (choosenItemsKeys: React.Key[]) => {
    const deleteArtistsIds = findPLaylistIds(choosenItemsKeys, playlists);
    for (let i = 0; i < deleteArtistsIds.length; i++) {
      deletePlaylist(deleteArtistsIds[i])
    }
  }

  const onSearchChange = async (e: any) => {
    try {
      const response = await axios.get(`https://merodibackend-2.onrender.com/search?query=${e.target.value}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setPlaylists(response.data.playlists)
    }
    catch (err) {

    }
  }

  return (
    <>
      {showErrorPopUp && <div className={styles.errorPopUp}>
        <ErrorPopUp message={errorMessage} type={errorType} />
      </div>}
      <div className={showPopUp ? styles.popUpWrapper : styles.popUp}>
        <div className={showPopUp ? styles.showPopUp : styles.hiddePopUp}>
          <PopUps id={playlistId} title={'Delete Playlist'} message={'Are you sure you want to delete'} target={findPlaylistTitle(playlistId, playlists)} buttonTitle={'Delete'} onCancelClick={() => setShowPopUp(false)} onSubmitClick={deletePlaylist} />
        </div>
      </div>
      {playlists && <main className={styles.container}>
        <div className={styles.search} >
          <Search onChange={onSearchChange} />
        </div>
        <div className={styles.tbl} >
          <AntTable onChoosenItemsClick={onChoosenItemsClick} columns={[
            {
              title: 'Playlist Name',
              dataIndex: 'playlistName'
            },
            {
              title: 'User',
              dataIndex: 'email'
            },
            {
              title: 'Number of Songs',
              dataIndex: 'numberOfSongs'
            }
          ]}
            dataSource={
              playlists.map((item, index) => {
                return {
                  key: index,
                  playlistName: <div className={styles.favSong}>
                    <img src={item.image} alt={'playlist cover'} width={32} height={32} />
                    <span>{item.title}</span>
                  </div>,
                  email: <div className={styles.favSong}>
                    {item.user[0].email}
                  </div>,
                  numberOfSongs: item.musics.length,
                  action: <Image onClick={() => {
                    setShowPopUp(true)
                    setPlaylistId(item.id);
                    setShowErrorPopUp(false)
                  }} src={'/icons/trash.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24
                }
              })
            } />
        </div>
      </main>}
    </>
  );
  }
  