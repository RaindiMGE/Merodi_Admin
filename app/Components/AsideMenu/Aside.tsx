'use client'

import Link from 'next/link';
import styles from './Aside.module.scss';
import Image from 'next/image';
import NavBar from './NavBar/NavBar';
import { useState } from 'react';
import { deleteCookie } from '@/helpers/cookies';

const Aside = () => {

    const [activePageId, setActvePageId] = useState(1);
    const onLogoutCLick = () => {
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
                    onClick: () => setActvePageId(1),
                    href: '/'
                },
                {
                    id: 2,
                    title: 'Artists',
                    icon: 'defaultArtistIcon.svg',
                    clickedIcon: 'activeArtistIcon.svg',
                    onClick: () => setActvePageId(2),
                    href: '/Artist'
                },
                {
                    id: 3,
                    title: 'Albums',
                    icon: 'defaultAlbumIcon.svg',
                    clickedIcon: 'activeAlbumIcon.svg',
                    onClick: () => setActvePageId(3),
                    href: '/Album'
                },
                {
                    id: 4,
                    title: 'Playlists',
                    icon: 'defaultPlaylistIcon.svg',
                    clickedIcon: 'activePlaylistIcon.svg',
                    onClick: () => setActvePageId(4),
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