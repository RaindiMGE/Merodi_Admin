'use client'

import Image from 'next/image';
import styles from './InfoPop-ups.module.scss';

interface Props {
    message: string;
    type: 'success' | 'error';
}

const InfoPopUp = (props: Props) => {

    const icon = props.type == 'success' ? 'successIcon.svg' : 'errorIcon.svg';

    return <div className={styles.containerWrapper}>
        <div className={styles.container}>
            <Image src={`/icons/${icon}`} alt='icon' width={24} height={24} />
            <p className={styles.message}>{props.message}</p>
        </div>
    </div>
}

export default InfoPopUp;