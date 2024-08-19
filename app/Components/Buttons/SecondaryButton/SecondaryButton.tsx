'use client'

import styles from './SecondaryButton.module.scss';

interface Props {
    title: string;
    isBlue?: boolean;
    disabled?: boolean;
}

const SecondaryButton = (props: Props) => {
    return <button disabled={props.disabled} type='button' className={`${styles.button} ${props.isBlue ? styles.blueButton : styles.grayButton}`}>
        {props.title}
    </button>
}

export default SecondaryButton;