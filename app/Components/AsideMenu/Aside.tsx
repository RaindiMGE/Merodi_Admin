'use client'

import Link from 'next/link';
import styles from './Aside.module.scss';
import Image from 'next/image';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';
import { deleteCookie } from '@/helpers/cookies';
import { useRecoilState } from 'recoil';
import { activeAsideMenuId } from '@/app/states';
import { useRouter } from 'next/navigation';

const Aside = () => {

    const [activePageId, setActvePageId] = useRecoilState(activeAsideMenuId);
    const router = useRouter()

    const onLogoutCLick = () => {
        router.push('/login')
        deleteCookie('token')
    }

    return <aside className={styles.container}>
        <Link href={'/'} ><Image src={'/Logo.svg'} alt='Logo Main' width={130} height={48} /></Link>
        <div className={styles.navBarBox}>
            <NavBar pages={[
                {
                    id: 1,
                    title: 'Users',
                    icon: 'defaultUserIcon.svg',
                    clickedIcon: 'activeUserIcon.svg',
                    href: '/User'
                },
                {
                    id: 2,
                    title: 'Artists',
                    icon: 'defaultArtistIcon.svg',
                    clickedIcon: 'activeArtistIcon.svg',
                    href: '/Artist'
                },
                {
                    id: 3,
                    title: 'Albums',
                    icon: 'defaultAlbumIcon.svg',
                    clickedIcon: 'activeAlbumIcon.svg',
                    href: '/Album'
                },
                {
                    id: 4,
                    title: 'Playlists',
                    icon: 'defaultPlaylistIcon.svg',
                    clickedIcon: 'activePlaylistIcon.svg',
                    href: '/Playlists'
                },
            ]} activePageId={activePageId} />
            <Link href={'/login'} className={styles.logoutLink} onClick={onLogoutCLick}>
                <Image src={'/icons/logoutIcon.svg'} alt='logout icon' width={24} height={24} />
                Log out
            </Link>
        </div>
    </aside>
}

export default Aside;