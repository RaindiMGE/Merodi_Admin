'use client'

import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import styles from './MainPop-up.module.scss';

interface Props {
    title: string;
    message: string;
    target: string;
    buttonTitle: string;
    onCancelClick?: () => void;
    onSubmitClick?: () => void;
}

const MainPopUp = (props: Props) => {
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <h3 className={styles.heading}>{props.title}</h3>
            <p className={styles.message}>{props.message} <span className={styles.target}>{props.target}?</span></p>
            <div className={styles.buttonsBox}>
                <SecondaryButton title='Cancel' onClick={props.onCancelClick} />
                <SecondaryButton title={props.buttonTitle} onClick={props.onSubmitClick} isBlue />
            </div>
        </div>
    </div>
}

export default MainPopUp;