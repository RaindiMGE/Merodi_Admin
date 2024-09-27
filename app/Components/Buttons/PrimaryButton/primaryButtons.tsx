import styles from "./primaryButtons.module.scss";
import React from "react";

interface buttonProps {
  isLarge?: boolean;
  title: string;
  onClick?: () => void;
  
}
const Button = ({ isLarge, title, onClick }: buttonProps) => {
  return ( 
    <button onClick={onClick}  className={isLarge ? styles.bigButton : styles.mainButton }>
      {!isLarge && (
        <svg
          className={styles.imgTag}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 15H29"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 29V1"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {title}
    </button>
  );
};

export default Button;
