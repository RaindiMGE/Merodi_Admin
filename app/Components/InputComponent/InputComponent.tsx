'use client'

import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './InputComponent.module.scss';
import { useState } from 'react';
import Image from 'next/image';

interface Props {
    placeholder: string;
    forAdminPassword?: boolean;
    error?: FieldError | undefined;
    register?: UseFormRegisterReturn;
    isLoginInput?: boolean;
}

const Input = (props: Props) => {

    const [inputType, setInputType] = useState(props.forAdminPassword ? 'password' : 'text')

    const onClick = () => {
        if (inputType == 'text') setInputType('password')
        else setInputType('text')
    }

    return <div className={styles.container}>
        <div className={styles.inputWrapper} style={{
            borderColor: props.error ? '#FF3333' : '',
            border: props.isLoginInput ? '0' : '',
            padding: props.isLoginInput ? '12px 0' : '',
            borderBottom: props.isLoginInput ? '1px solid #E3E5E8' : '',
        }}>
            <input type={'email'} placeholder={props.placeholder} {...props.register} className={styles.input} />
            {props.forAdminPassword && <Image src={'/icons/defaultShowPassword.svg'} alt='show password' width={24} height={24} onClick={onClick} />}
        </div>
        {props.error && <span className={styles.error}>{props.error.message}</span>}
    </div>
}

export default Input;