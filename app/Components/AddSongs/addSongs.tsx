'use client'

import React, { useEffect, useState } from "react";
import styles from "./addSongs.module.scss";
import UploadButton from "../Buttons/UploadButton/UploadButton";
import Button from "../Buttons/PrimaryButton/primaryButtons";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import { useForm } from "react-hook-form";
import Input from "../InputComponent/InputComponent";
import AddImageModel from "../AddInfoModel/AddImageModel/AddImageModel";

interface AddSongsProps {
  userId: string;
  onCancelClick: () => void;
  onSubmitClick: (data: MusicInfo) => void;
  mustReset?: boolean;
}

export interface MusicInfo {
  title: string;
  image: FileList;
  song: FileList
}

const AddSongs: React.FC<AddSongsProps> = ({ userId, onCancelClick, onSubmitClick, mustReset }) => {
  const [songTitle, setSongTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<MusicInfo>()
  const [mustResett, setMustReset] = useState<boolean>()

  useEffect(() => {
    if(mustReset) {
      reset()
    }
  }, [mustReset])

  const onSubmit = (data: MusicInfo) => {
    onSubmitClick(data);
    setMustReset(true)
  }

  const onCancel = () => {
    setMustReset(true)
    reset()
    onCancelClick()
  }

  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.addSong}>Add Song</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formBox}>
        <div className={styles.contentWrapper}>
          <div className={styles.inputWrapper}>
            <Input mustReset={mustReset} register={{
              ...register('title', {
                required: {
                  value: true,
                  message: 'Please enter a title',
                },
                onChange: (e) => {
                  setSongTitle(e.target.value);
                }
              })
            }} placeholder="Song Title" error={errors.title} />
          </div>

          <div className={styles.addImage}>
            <span>Cover Photo</span>
            <AddImageModel mustReset={mustReset} register={{
              ...register('image', {
                required: {
                  value: true,
                  message: 'Please select an image',
                },
              })
            }} error={errors.image} />
          </div>

          <div className={styles.uploadButtonWrapper}>
            <UploadButton mustReset={mustReset} register={{ ...register('song') }} error={errors.song} />
          </div>

        </div>

        <div className={styles.buttonsWrapper}>
          <div className={styles.footerBox}>
            <SecondaryButton type="button" title="Cancel" onClick={onCancel} />
            <SecondaryButton type="submit" onClick={handleSubmit(onSubmit)} isBlue title="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSongs;
