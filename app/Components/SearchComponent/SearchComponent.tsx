'use client'

import { useState } from 'react';
import styles from './SearchComponent.module.scss';
import { useRecoilState } from 'recoil';
import { search } from '@/app/states';

interface Props {
    disabled?: boolean;
    onChange?: (e: any) => void;
}

const SearchComponent = (props: Props) => {
    const [value, setValue] = useRecoilState(search)

    return <div className={props.disabled ? styles.disbledConteiner : styles.searchWrapper}>
        <svg className={styles.image} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" color="currentColor" /></svg>
        <input onChange={(e) => {
            setValue(e.target.value)
        }} className={styles.input} type="search" placeholder="Search" disabled={props.disabled} />
    </div>
}

export default SearchComponent;