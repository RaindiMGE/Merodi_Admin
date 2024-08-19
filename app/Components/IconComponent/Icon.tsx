'use client'

import Image from 'next/image';
import styles from './Icon.module.scss';
import { useState } from 'react';

interface Props {
    icon: string;
    hoverIcon: string;
    clickedIcon: string;
    onClick?: () => void;
    iconSize: number;
}

const Icon = (props: Props) => {

    const [currentIcon, setCurrentIcon] = useState(props.icon);

    const handleMouseOver = () => {
        if (currentIcon == props.clickedIcon) ''
        else setCurrentIcon(props.hoverIcon);
    }

    const handleMouseOut = () => {
        if (currentIcon == props.clickedIcon) ''
        else setCurrentIcon(props.icon)
    }

    const handleOnClick = () => {
        if (currentIcon == props.icon) setCurrentIcon(props.clickedIcon);
        else setCurrentIcon(props.icon)
        if (props.onClick) props.onClick()
    }

    return <button
        type='button'
        className={styles.button}
        onClick={handleOnClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >
        <Image src={`/icons/${currentIcon}`} alt='icon' width={props.iconSize} height={props.iconSize} />
    </button>
}

export default Icon;