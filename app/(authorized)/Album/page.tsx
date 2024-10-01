"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import SearchComponent from "@/app/Components/SearchComponent/SearchComponent";
import AntTable from "@/app/Components/AntTable/Table";
import SecondaryButton from "@/app/Components/Buttons/SecondaryButton/SecondaryButton";
import axios from "axios";
import { getCookie } from "@/helpers/cookies";

interface AlbumInfo {
  id: number;
  title: string;
  releaseDate: string;
  description: string;
  imageUrl: string;
  musics: {
    id: number;
    name: string;
    duration: number;
    imageUrl: string;
    albumId: number;
  }[];
  authors: {
    id: number;
    firstName: string;
    lastName: string;
    biography: string;
    imageUrl: string;
  }[];
}

const Album = () => {
  const [userId, setUserId] = useState<null | Number>(null);
  const [albums, setAlbums] = useState<AlbumInfo[]>()
  const token = getCookie('token')

  const getAlbumData = async () => {
    try {
      const response = await axios.get('https://merodibackend-2.onrender.com/album', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      } )
      setAlbums(response.data)
    }
    catch (error) {

    }
  }

  return (
    <div>
      <div className={styles.maintwo}>
        <SearchComponent />

        <SecondaryButton title={"Add Album"} />
      </div>

      {albums && <AntTable
        columns={[
          {
            title: 'Album Name',
            dataIndex: 'albumName'
          },
          {
            title: "Artist Name",
            dataIndex: "artistName",
          },
          {
            title: "Date of release",
            dataIndex: "dateofrelease",
          },
        ]}
        dataSource={
          albums.map((item, index) => {
            return {
              key: index + 1,
              albumName: <div>
                <Image src={item.imageUrl} alt="album cover" width={24} height={24} />
                <span>{item.title}</span>
              </div>,
              artistName: item.authors.map((item) => `${item.firstName} 1${item.lastName}`).join(),
              dateofrelease: item.releaseDate
            }
          })
        }
      />}
    </div>
  );
};

export default Album;
