"use client";

import AddSongs from "@/app/Components/AddSongs/addSongs";
import AntTable from "@/app/Components/AntTable/Table";
import Button from "@/app/Components/Buttons/PrimaryButton/primaryButtons";
import SearchComponent from "@/app/Components/SearchComponent/SearchComponent";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.scss";

const AlbumSongs = () => {
  function setUserId(arg0: number) {
    throw new Error("Function not implemented.");
  }
  const [showAddSong, setAddSong] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.maintwo}>
        <SearchComponent />

        <div className={styles.addSongsPop}>
          <Button title={"Add Song"} onClick={() => setAddSong(true)} />
        </div>
        {showAddSong && (
          <AddSongs userId={""} onCancelClick={() => setAddSong(false)} />
        )}
      </div>

      <AntTable
        columns={[
          {
            title: "",
            dataIndex: "sequence",
          },
          {
            title: "",
            dataIndex: "name",
          },
          {
            title: "",
            dataIndex: "artist",
          },
          {
            title: "",
            dataIndex: "listen",
          },
          {
            title: "",
            dataIndex: "duration",
          },
        ]}
        dataSource={[
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
          {
            sequence: 1,
            name: "kendrick lamar",
            artist: "artist1",
            listen: "2.1m",
            duration: "4:59",
            edit: (
              <Image
                src={"/icons/editIcon.svg"}
                alt="edit"
                width={24}
                height={24}
              />
            ),
            action: (
              <Image
                onClick={() => {
                  setUserId(1);
                }}
                src={"/icons/trash.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default AlbumSongs;
