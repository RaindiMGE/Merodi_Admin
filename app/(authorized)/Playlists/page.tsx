'use client'

import styles from './page.module.scss';
import Search from "../../Components/SearchComponent/SearchComponent"
import PopUps from  '../../Components/Pop-ups/MainPop-up/MainPop-up';
import { useState } from 'react';
import AntTable from '../../Components/AntTable/Table';
import  Image  from 'next/image';
import { Span } from 'next/dist/trace';
import ErrorPopUp from "../../Components/Pop-ups/ErrorPop-up/InfoPop-ups"
import axios from 'axios';
import { message } from 'antd';


export default function Home() {
  const [userId , setUserId] = useState<null|Number>(null);

  return (
    <main>
        {userId && <div className={styles.PopUps}>
        <PopUps title={'Delete Playlist'} message={'Are you sure you want to delete'} target={'Fav Songs?'} buttonTitle={'Delete'} onCancelClick={()  => setUserId(null)} />
        </div>
      }
      <div className={styles.searchh} >
      <Search/>
      </div>
      <div className={styles.tbl} >
      <AntTable isUserInfo columns={[
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
          [
            {
              key: 1,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 2,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 3,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 4,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 5,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 6,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 7,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 8,
              playlistName:(
                <div  className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 9,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },

            {
              key: 10,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 11,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 12,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 13,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 14,
              playlistName:(
                <div className={styles.favSong}>
                  <Image 
                  src={'/icons/PlaylistIcon.png'}  
                  alt='PlaylistIcon' 
                  width={24} 
                  height={24} 
                />
                <span>Fav Songs</span>
                </div>
                
              ) ,
              email: 'MakaSwift@gmail.com',
              numberOfSongs: '23',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
          ]
        }/>
      </div>
    </main>
  );
    
}

