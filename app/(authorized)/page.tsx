'use client'
import styles from './page.module.scss'
import Search from '../Components/SearchComponent/SearchComponent'
import AntTable from '../Components/AntTable/Table'
import Image from 'next/image';
import PopUps from '../Components/Pop-ups/MainPop-up/MainPop-up'
import React, { useEffect, useState } from 'react';
import AddSongs from '../Components/AddSongs/addSongs';
import ChangePassword, { Input } from '../Components/ChangePassword/ChangePassword';
import axios from 'axios';
import { getCookie } from '@/helpers/cookies';
import Aside from '../Components/AsideMenu/Aside';
import { jwtDecode } from 'jwt-decode';
import { findUserEmail, findUsersIds } from '@/helpers/dataAction';
import InfoPopUp from '../Components/Pop-ups/ErrorPop-up/InfoPop-ups';
import { useRecoilState } from 'recoil';
import { activeAsideMenuId } from '../states';

export interface UserInfo {
  email: string;
  id: number;
}

export default function Home() {

  const [userId, setUserId] = useState<number>(0);
  const [editUserId, setEditUserId] = useState<number>(-1)
  const [users, setUsers] = useState<UserInfo[]>([])
  const token = getCookie('token')
  const [showBlockUser, setShowBlockUser] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorType, setErrorType] = useState<'success' | 'error'>();
  const [showErrorPopUp, setShowErrorPopUp] = useState(false)
  const [activeAside, setActiveAside] = useRecoilState(activeAsideMenuId);

  useEffect(() => {
    setActiveAside(1);
  }, [])


  const getUsersData = async () => {
    try {
      const response = await axios.get('https://merodibackend-2.onrender.com/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.role == 'admin') {
          setUsers(response.data)
        } else if (decodedToken.role == 'user') {
          alert(`You Are Not Admin`)
        }
      }
    }
    catch (err) {
    }
  }

  useEffect(() => {
    getUsersData()
  }, [])

  const onEditSubmitClick = (data: Input, userId: number) => {
    const newData = {
      password: data.password
    }
    axios.patch(`https://merodibackend-2.onrender.com/user/${userId}`, newData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setEditUserId(-1);
        setErrorMessage(`Password Change For ${res.data.email}`)
        setErrorType('success')
      })
      .catch((err) => {
        setErrorMessage('Operation failed. Please try again')
        setErrorType('error')
      })
      .finally(() => {
        setShowErrorPopUp(true)
      })
  }

  const onBlockSubmitClick = (id: number) => {
    axios.delete(`https://merodibackend-2.onrender.com/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        getUsersData()
        setErrorMessage(`User Blocked ${res.data.email}`)
        setErrorType('success')
      })
      .catch((err) => {
        setErrorMessage('Operation failed. Please try again')
        setErrorType('error')
      })
      .finally(() => {
        setShowErrorPopUp(true)
        setShowBlockUser(false)
      })
  }

  const onChoosenItemsClick = (choosenItemsKeys: React.Key[]) => {
    const blockUsersIds = findUsersIds(choosenItemsKeys, users);
    for(let i = 0; i < blockUsersIds.length; i++) {
      onBlockSubmitClick(blockUsersIds[i])
    }
  }

  return (
    <>
      {showErrorPopUp && <div className={styles.errorPopUp}>
        <InfoPopUp message={errorMessage} type={errorType} />
      </div>}
      <div className={!showBlockUser ? styles.popUp : styles.popUpWrapper}>
        <div className={!showBlockUser ? styles.hiddePopUp : styles.showPopUp}>
          <PopUps id={userId} title={'Block User'} message={'Are you sure you want to block'} target={findUserEmail(userId, users)} buttonTitle={'Block'} onCancelClick={() => setShowBlockUser(false)} onSubmitClick={onBlockSubmitClick} />
        </div>
      </div>
      <div className={(editUserId >= 0) ? styles.popUpWrapper : styles.popUp}>
        <div className={(editUserId >= 0) ? styles.showChangePasswordPopUp : styles.hiddeChangePasswordPopUp}>
          <ChangePassword userId={editUserId} onCancelClick={() => setEditUserId(-1)} onSubmitClick={onEditSubmitClick} />
        </div>
      </div>
      {users && <main className={styles.container}>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.tbl}>
          {users && <AntTable onChoosenItemsClick={onChoosenItemsClick} isUserInfo columns={[{
            title: 'Email',
            dataIndex: 'email'
          }
          ]}
            dataSource={
              users.map((item, index) => {
                return {
                  key: index + 1,
                  email: item.email,
                  edit: <Image src={'/icons/editIcon.svg'} alt='edit' width={24} height={24} onClick={() => {
                    setEditUserId(item.id)
                    setShowErrorPopUp(false)
                  }} />,
                  action: <Image onClick={() => {
                    setShowBlockUser(true);
                    setUserId(item.id)
                    setShowErrorPopUp(false)
                  }} src={'/icons/blockIcon.svg'} alt='block' width={24} height={24} />, dataIndex: 'action', width: 24
                }
              })
            } />}
        </div>
      </main>}
    </>
  );
}