'use client'

import styles from './SecondaryButton.module.scss';

interface Props {
    title: string;
    isBlue?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

const SecondaryButton = (props: Props) => {
        disabled={props.disabled}
        type='button'
        className={`${styles.button} ${props.isBlue ? styles.blueButton : styles.grayButton}`}
        onClick={props.onClick}
    >
        {props.title}
    </button>
}

export default SecondaryButton;