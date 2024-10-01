'use client'

import styles from './SecondaryButton.module.scss';

interface Props {
    title: string;
    isBlue?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    type?: "button" | "submit";
}

const SecondaryButton = (props: Props) => {
    return <button
        disabled={props.disabled}
        type={props.type}
        className={`${styles.button} ${props.isBlue ? styles.blueButton : styles.grayButton}`}
        onClick={props.onClick}
    >
        {props.title}
    </button>
}

export default SecondaryButton;