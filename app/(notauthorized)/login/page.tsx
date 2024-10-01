'use client'

import Image from 'next/image';
import styles from './page.module.scss';
import Input from '../../Components/InputComponent/InputComponent';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Login } from '../../interfaces/interface';
import Button from '../../Components/Buttons/PrimaryButton/primaryButtons';
import axios from 'axios';
import { error } from 'console';
import { useCookie } from '@/helpers/cookies';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Login>()
    const router = useRouter()

    const onSubmit: SubmitHandler<Login> = data => {
        axios.post('https://merodibackend-2.onrender.com/auth/login', data)
            .then((res) => {
                setCookies('token', res.data, 60)
                router.push('/')
            })
            .catch((err) => {
                alert('Error');
            })
    }

    return <div className={styles.container}>
        <div className={styles.imgWrapper}>
            <Image src={'/loginPageImage.svg'} alt='Login Page Image' objectFit='cover' fill />
        </div>
        <div className={styles.inputsWrapper}>
            <div className={styles.inputsContent}>
                <h2 className={styles.heading}>Login</h2>
                <form className={styles.inputsBox} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.emailWrapper}>
                        <Input placeholder={'Email'} isLoginInput register={{...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email',
                            },
                        })}} error={errors.email} />
                    </div>
                    <div className={styles.passwordWrapper}>
                        <Input placeholder={'Password'} isLoginInput isForPassword register={{...register('password', {
                            required: {
                                value: true,
                                message: 'Password is required',
                            },
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long',
                            },
                            maxLength: {
                                value: 255,
                                message: 'Password must be at most 255 characters long',
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                                message: 'Password must contain at least one lowercase letter, one uppercase letter, one digit and one simbol'
                            }
                        })}} error={errors.password} />
                        <div className={styles.checkBox}>
                            <input type="checkbox" name="" id="check" className={styles.input} />
                            <label htmlFor="check" className={styles.label}>Remember me</label>
                        </div>
                    </div>
                    <Button isLarge title='Login' onClick={handleSubmit(onSubmit)} />
                </form>
            </div>
        </div>
    </div>
}

export default LogIn;

function setCookies(arg0: string, data: any, arg2: number) {
    throw new Error('Function not implemented.');
}
