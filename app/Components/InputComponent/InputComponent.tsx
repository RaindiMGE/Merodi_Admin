'use client'

import styles from './InputComponent.module.scss';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { useState } from 'react';
import Icon from '../IconComponent/Icon';

interface Props {
    placeholder: string;
    isForPassword?: boolean;
    error: FieldError | undefined;
    register: UseFormRegisterReturn;
    isLoginInput?: boolean;
}

const Input = (props: Props) => {

    const [inputType, setInputType] = useState(props.isForPassword ? 'password' : 'text')

    const showPasswordClick = () => {
        if (inputType == 'text') setInputType('password')
        else setInputType('text')
    }

    return <div className={styles.container}>
        <div className={props.isLoginInput ? styles.loginInputWrapper : styles.inputWrapper} style={{
            borderColor: props.error ? '#FF3333' : '',
        }}>
            <input type={inputType} placeholder={props.placeholder} {...props.register} className={styles.input} />
            {props.isForPassword && <Icon icon='defaultShowPassword.svg' clickedIcon='clickedShowPassword.svg' hoverIcon='hoverShowPassword.svg' iconSize={24} onClick={showPasswordClick} />}
        </div>
        {props.error && <span className={styles.error}>{props.error.message}</span>}
    </div>
}

export default Input;