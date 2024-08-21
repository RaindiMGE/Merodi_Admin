'use client'

import styles from './SearchComponent.module.scss';

interface Props {
    disabled?: boolean;
}

const SearchComponent = ({ disabled }: Props) => {
    return <div className={disabled ? styles.disbledConteiner : styles.searchWrapper}>
        <svg className={styles.image} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" color="currentColor" /></svg>
        <input className={styles.input} type="search" placeholder="Search" disabled={disabled} />
    </div>
}

export default SearchComponent;