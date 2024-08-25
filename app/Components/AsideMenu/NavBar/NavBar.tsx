'use client'

import Image from 'next/image';
import styles from './NavBar.module.scss';
import Link from 'next/link';

interface Page {
    id: number;
    icon: string;
    clickedIcon: string;
    title: string;
    onClick: () => void;
    href: string;
}

interface Props {
    pages: Page[];
    activePageId: number
}

const NavBar = ({ pages, activePageId }: Props) => {
    return <nav className={styles.nav}>
        {pages.map((page: Page) => (
            <Link href={page.href} className={styles.link}>
                <div key={page.id} className={`${styles.page} ${activePageId == page.id ? styles.active : styles.default}`} onClick={page.onClick} >
                    <Image src={`/icons/${activePageId == page.id ? `${page.clickedIcon}` : `${page.icon}`}`} alt='Icon' width={24} height={24} />
                    {page.title}
                </div>
            </Link>
        ))}
    </nav>
}

export default NavBar;

