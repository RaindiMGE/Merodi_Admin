'use client'

import styles from './InputComponent.module.scss';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';

interface Props {
    placeholder: string;
    isAdmin?: boolean;
    error: FieldError;
    register: UseFormRegisterReturn;
    isLoginInput?: boolean;
}

const Input = (props: Props) => {

    const [inputType, setInputType] = useState(props.isAdmin ? 'password' : 'text')

    const onClick = () => {
        if (inputType == 'text') setInputType('password')
        else setInputType('text')
    }

    return <div className={styles.container}>
        <div className={props.isLoginInput ? styles.loginInputWrapper : styles.inputWrapper} style={{
            borderColor: props.error ? '#FF3333' : '',
        }}>
            <input type={'email'} placeholder={props.placeholder} {...props.register} className={styles.input} />
            {props.isAdmin && <Image src={'/icons/defaultShowPassword.svg'} alt='show password' width={24} height={24} onClick={onClick} />}
        </div>
        {props.error && <span className={styles.error}>{props.error.message}</span>}
    </div>
}

export default Input;