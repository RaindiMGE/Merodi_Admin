'use client'

import Image from 'next/image';
import styles from './AddImageModel.module.scss';
import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
    register: UseFormRegisterReturn
}

const AddImageModel = (props: Props) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setSelectedImage(file);
        } else {
            setSelectedImage(null)
        }
    };

    return <div className={styles.addImageModel}>
        <input type='file' className={styles.chooseImgInput} {...props.register} onChange={handleImageChange} />
        <Image src={'/icons/plusIcon.svg'} alt='plus icon' width={28} height={28} className={selectedImage ? styles.afterChoose : ''} />
        {selectedImage && <Image src={URL.createObjectURL(selectedImage)} alt='choosen image' width={208} height={208} />}
    </div>
}

export default AddImageModel;