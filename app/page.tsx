'use client'
import styles from './page.module.scss'
import Search from './Components/SearchComponent/SearchComponent'
import AntTable from './Components/AntTable/Table'
import Image from 'next/image';
import PopUps from  './Components/Pop-ups/MainPop-up/MainPop-up'
import { useState } from 'react';


import AddSongs from './Components/AddSongs/addSongs';
import ChangePassword from './Components/ChangePassword/ChangePassword';

export default function Home() {

const [userId , setUserId] = useState<null|Number>(null);



  return (
    <main>
       {userId && <div className={styles.PopUps}>
        <PopUps title={'Block User'} message={'Are you sure you want to block'} target={'MakaSwift@gmail.com'} buttonTitle={'Block'} onCancelClick={() => setUserId(null)} />
        </div>
      }
      <div>
      <div className={styles.search}>
      <Search/>
      </div>
      <div className={styles.tbl}>
      <AntTable isUserInfo columns={[{
        title: 'Email',
        dataIndex: 'email'
        
      }
      ]}
        dataSource={
          [
            {
              key: 1,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 2,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 3,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 4,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 5,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 6,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 7,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 8,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 9,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },

            {
              key: 10,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 11,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            }, 
            {
              key: 12,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 13,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
            {
              key: 14,
              email: 'MakaSwift@gmail.com',
              edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} />,
              action: <Image onClick={() => {setUserId(1)}} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24 
            },
          ]
        }/>
      </div>
      </div>
    </main>
  );
}