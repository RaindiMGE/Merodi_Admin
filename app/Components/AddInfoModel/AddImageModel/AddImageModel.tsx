'use client'

import Image from 'next/image';
import styles from './AddImageModel.module.scss';
import { useEffect, useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Props {
    register: UseFormRegisterReturn
    error?: FieldError | undefined;
    file?: string | StaticImport;
    mustReset?: boolean;
}

const AddImageModel = (props: Props) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [image, setImage] = useState<any>()

    useEffect(() => {
        if(props.mustReset) {
            setSelectedImage(null);
        }
    }, [props.mustReset])

    useEffect(() => {
        if(props.file) {
            setImage(props.file)
        }
    }, [props.file])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setSelectedImage(file);
        } else {
            setSelectedImage(null)
        }
    };

    return <>
        <div className={styles.addImageModel}>
            <input type='file' className={styles.chooseImgInput} {...props.register} onChange={handleImageChange} accept='image/*' />
            <Image src={'/icons/plusIcon.svg'} alt='plus icon' width={28} height={28} className={(selectedImage || image) ? styles.afterChoose : ''} />
            {
                selectedImage ? <Image src={URL.createObjectURL(selectedImage)} alt='choosen image' width={208} height={208} /> : image && <img src={`${image}`} alt={'Image'} width={208} height={208} />
            }
        </div>
        {props.error && <span className={styles.error}>{props.error.message}</span>}
    </>
}

export default AddImageModel;