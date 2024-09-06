'use client'

import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import styles from './AddInfoModel.module.scss';
import AddImageModel from './AddImageModel/AddImageModel';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
    artistName: string;
    albumName: string;
    date: string;
    biography: string;
}

interface Props {
    onCancelClick: () => void;
    isAlbumInfo?: boolean;
}

const AddInfoModel = (props: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log("Valid Date:", data.date);
        alert('Rame')
    }


    return <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.mainContent}>
            <h4 className={styles.title}>Add {props.isAlbumInfo ? 'Album' : 'Artist'}</h4>
            <div className={styles.infoBox}>
                {props.isAlbumInfo &&
                    <div className={`${styles.addTextBox}`}>
                        <label className={styles.label}>Album Name</label>
                        <div className={styles.inputWrapper}>
                            <input type="text" className={styles.input} {...register('albumName', {
                                required: {
                                    value: true,
                                    message: 'Please enter album name',
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Album name should be at least 3 characters long',
                                },
                                maxLength: {
                                    value: 255,
                                    message: 'Album name should not be more than 255 characters long',
                                }
                            })} />
                            {errors.albumName && <span className={styles.error}>{errors.albumName.message}</span>}
                        </div>
                    </div>
                }
                <div className={`${styles.addTextBox}`}>
                    <label className={styles.label}>Artist Name</label>
                    <div className={styles.inputWrapper}>
                        <input type="text" className={styles.input} {...register('artistName', {
                            required: {
                                value: true,
                                message: "Please enter artist name"
                            },
                            minLength: {
                                value: 2,
                                message: "Please enter at least 2 characters"
                            },
                            maxLength: {
                                value: 255,
                                message: "Please enter at most 255 characters"
                            }
                        })} />
                        {errors.artistName && <span className={styles.error}>{errors.artistName?.message}</span>}
                    </div>
                </div> 
                {props.isAlbumInfo
                    && <div className={styles.addDateBox}>
                    <label className={styles.label}>Date of release</label>
                    <div className={styles.inputWrapper}>
                            <input type='text' className={styles.dateInput} {...register('date', {
                                required: {
                                    value: true,
                                    message: 'Please enter date of release'
                                },
                                pattern: {
                                    value: /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                                    message: "Invalid date format, expected dd/mm/yyyy"
                                }

                            })} />
                            {errors.date && <span className={styles.error}>{errors.date?.message}</span>}
                        </div>
                    
                </div>}
                <div className={styles.addTextBox}>
                    <label className={styles.label}>{props.isAlbumInfo ? 'Description' : 'Biography'}</label>
                    <div className={styles.inputWrapper}>
                        <textarea className={styles.textArea} {...register('biography', {
                            maxLength: {
                                value: 1000,
                                message: `${props.isAlbumInfo ? 'Description' : 'Biography'} should not exceed 1000 characters`
                            }
                        })}></textarea>
                        {errors.biography && <span className={styles.error}>{errors.biography?.message}</span>}
                    </div>
                </div>
                <div className={styles.addImageBox}>
                    <label className={styles.label} >{props.isAlbumInfo ? 'Cover' : 'Profile'} Photo</label>
                    <AddImageModel />
                </div>
            </div>
        </div>
        <div className={styles.buttonsBox}>
            <SecondaryButton title='Cancel' onClick={props.onCancelClick} />
            <SecondaryButton title='Submit' isBlue onClick={handleSubmit(onSubmit)} />
        </div>
    </form>
}

export default AddInfoModel;