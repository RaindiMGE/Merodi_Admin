'use client'

import Image from 'next/image';
import styles from './UploadButton.module.scss';
import { useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
    register: UseFormRegisterReturn;
    error: FieldError | undefined;
}

const UploadButton = (props: Props) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setSelectedImage(file);
        } else {
            setSelectedImage(null)
        }
    };

    return <div className={styles.container}>
        <div className={styles.uploadBox}>
            <div className={styles.uploadButton}>
                <Image src={'/icons/uploadIcon.svg'} alt='upload icon' width={24} height={24} />
                <span className={styles.title}>Upload File</span>
            </div>
            <input type='file' {...props.register} className={styles.input} onChange={handleImageChange} accept=".mp3,audio/mpeg" />
        </div>
        {props.error && <span className={styles.error}>{props.error.message}</span>}
        {selectedImage && <span className={styles.fileName}>{selectedImage?.name}</span>}
    </div>
}

export default UploadButton;