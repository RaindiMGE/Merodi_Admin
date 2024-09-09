'use client'

import Image from 'next/image';
import styles from './UploadButton.module.scss';
import { useState } from 'react';

const UploadButton = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setSelectedImage(file);
        } else {
            setSelectedImage(null)
        }
    };

    console.log(selectedImage);

    return <div className={styles.container}>
        <div className={styles.uploadBox}>
            <div className={styles.uploadButton}>
                <Image src={'/icons/uploadIcon.svg'} alt='upload icon' width={24} height={24} />
                <span className={styles.title}>Upload File</span>
            </div>
            <input type='file' className={styles.input} onChange={handleImageChange} />
        </div>
        {selectedImage && <span className={styles.fileName}>{selectedImage?.name}</span>}
    </div>
}

export default UploadButton;