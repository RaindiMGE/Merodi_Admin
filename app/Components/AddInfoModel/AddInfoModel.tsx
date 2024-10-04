'use client'

import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import styles from './AddInfoModel.module.scss';
import AddImageModel from './AddImageModel/AddImageModel';
import { useForm, SubmitHandler, ChangeHandler } from 'react-hook-form';
import Image from 'next/image';
import { FormEventHandler, useEffect, useState } from 'react';
import { ArtistInfo } from '@/app/(authorized)/Artist/AddArtist/page';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface FormValues {
    artistName: string;
    albumName?: string;
    date?: string;
    biography: string;
    file: FileList | string;
}

interface Props {
    onCancelClick: () => void;
    onSubmit: (data: FormValues) => void;
    data?: {
        artistName: string;
        albumName?: string;
        date?: string;
        biography: string;
        file: string | StaticImport;
    };
    isAlbumInfo?: boolean;
}

const AddInfoModel = (props: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [albumName, setAlbumName] = useState<string | undefined>()
    const [artist, setArtist] = useState<string | undefined>()
    const [biography, setBiography] = useState<string | undefined>()
    const [date, setDate] = useState<string | undefined>()
    const [image, setImage] = useState<string | StaticImport>()

    useEffect(() => {
        setAlbumName(props.data?.albumName);
        setArtist(props.data?.artistName)
        setBiography(props.data?.biography)
        setDate(props.data?.date)
        if (props.data && (props.data.file !== undefined)) {
            setImage(props.data.file)
        }
    }, [props.data])

    console.log(albumName)

    return <form className={styles.container} onSubmit={handleSubmit(props.onSubmit)}>
        <div className={styles.mainContent}>
            <h4 className={styles.title}>Add {props.isAlbumInfo ? 'Album' : 'Artist'}</h4>
            <div className={styles.infoBox}>
                {props.isAlbumInfo &&
                    <div className={`${styles.addTextBox}`}>
                        <label className={styles.label}>Album Name</label>
                        <div className={styles.inputWrapper}>

                            <input type="text" value={albumName} className={styles.input}

                                {...register('albumName', {
                                    required: {
                                        value: !(albumName == undefined) ? false : true,
                                        message: 'Please enter album name',
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Album name should be at least 3 characters long',
                                    },
                                    maxLength: {
                                        value: 255,
                                        message: 'Album name should not be more than 255 characters long',
                                    },
                                    onChange: (e) => {
                                        setAlbumName(e.target.value)
                                    }
                                })} />
                            {errors.albumName && <span className={styles.error}>{errors.albumName.message}</span>}
                        </div>
                    </div>
                }
                <div className={`${styles.addTextBox}`}>
                    <label className={styles.label}>Artist Name</label>
                    <div className={styles.inputWrapper}>
                        <input type="text" value={artist} className={styles.input}  {...register('artistName', {
                            required: {
                                value: !(artist == undefined) ? false : true,
                                message: "Please enter artist name"
                            },
                            minLength: {
                                value: 2,
                                message: "Please enter at least 2 characters"
                            },
                            maxLength: {
                                value: 255,
                                message: "Please enter at most 255 characters"
                            },
                            onChange: (e) => {
                                setArtist(e.target.value)
                            }
                        })} />
                        {errors.artistName && <span className={styles.error}>{errors.artistName?.message}</span>}
                    </div>
                </div>
                {props.isAlbumInfo
                    && <div className={styles.addDateBox}>
                        <label className={styles.label}>Date of release</label>
                        <div className={styles.inputWrapper}>
                            <input type='text' value={date} className={styles.dateInput} {...register('date', {
                                required: {
                                    value: !(date == undefined) ? false : true,
                                    message: 'Please enter date of release'
                                },
                                pattern: {
                                    value: /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                                    message: "Invalid date format, expected dd/mm/yyyy"
                                },
                                onChange: (e) => {
                                    setDate(e.target.value)
                                }
                            })} />
                            {errors.date && <span className={styles.error}>{errors.date?.message}</span>}
                        </div>

                    </div>}
                <div className={styles.addTextBox}>
                    <label className={styles.label}>{props.isAlbumInfo ? 'Description' : 'Biography'}</label>
                    <div className={styles.inputWrapper}>
                        <textarea className={styles.textArea} value={biography} {...register('biography', {
                            maxLength: {
                                value: 1000,
                                message: `${props.isAlbumInfo ? 'Description' : 'Biography'} should not exceed 1000 characters`
                            },
                            onChange: (e) => {
                                setBiography(e.target.value)
                            }
                        })}></textarea>
                        {errors.biography && <span className={styles.error}>{errors.biography?.message}</span>}
                    </div>
                </div>
                <div className={styles.addImageBox}>
                    <label className={styles.label} >{props.isAlbumInfo ? 'Cover' : 'Profile'} Photo</label>
                    <AddImageModel file={image && image} register={{
                        ...register('file')
                    }} />
                </div>
            </div>
        </div>
        <div className={styles.buttonsBox}>
            <SecondaryButton title='Cancel' type='button' onClick={props.onCancelClick} />
            <SecondaryButton title='Submit' type='submit' isBlue onClick={handleSubmit(props.onSubmit)} />
        </div>
    </form>
}

export default AddInfoModel;