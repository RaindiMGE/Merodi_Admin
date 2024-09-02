'use client'

import Image from 'next/image';
import styles from './NameCard.module.scss';

interface Props {
    image: string;
    name: string;
}

const NameCard = (props: Props) => {
    return <div className={styles.container}>
        <Image src={props.image} alt='Image' width={32} height={32} />
        <span className={styles.name}>{props.name}</span>
    </div>
}

export default NameCard;