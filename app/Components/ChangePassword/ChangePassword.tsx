'use client'

import React, { useState } from "react";
import styles from "./ChangePassword.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../InputComponent/InputComponent";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";

interface ChangePasswordProps {
  userId: number;
  onCancelClick: () => void;
  onSubmitClick: (data: Input, userId: number) => void;
}

export interface Input {
  password: string;
  confirmPassword: string;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ userId, onCancelClick, onSubmitClick }) => {

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<Input>()

  const onSubmit: SubmitHandler<Input> = data => {
    onSubmitClick(data, userId);
  };

  return (
    <div className={styles.changePassword}>
      <h2 className={styles.changeMainPassword}>Change Password</h2>
      <form className={styles.formGap} onSubmit={handleSubmit(onSubmit)}>
        <Input register={{
          ...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: 'Password must contain at least one lowercase letter, one uppercase letter, one digit and one simbol'
            }
          })
        }} error={errors.password} isForPassword placeholder="New Password" />
        <Input register={{
          ...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm Password is required",
            },
            validate: (value: any) => value === getValues('password') || 'The passwords do not match',
          })
        }} error={errors.confirmPassword} isForPassword placeholder="Confirm Password" />
        <div className={styles.endButtons}>
          <SecondaryButton title={"Cancel"} onClick={onCancelClick} type="button" />
          <SecondaryButton title="Submit" onClick={handleSubmit(onSubmit)} type="submit" isBlue />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;