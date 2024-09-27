"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import SearchComponent from "@/app/Components/SearchComponent/SearchComponent";
import AntTable from "@/app/Components/AntTable/Table";
import SecondaryButton from "../Components/Buttons/SecondaryButton/SecondaryButton";

const Album = () => {
  const [userId, setUserId] = useState<null | Number>(null);
  return (
    <div>
      <div className={styles.maintwo}>
        <SearchComponent />

        <SecondaryButton title={"Add Album"} />
      </div>
      <AntTable
        columns={[
          {
            title: "Artist Name",
            dataIndex: "artistName",
          },
          {
            title: "Biography",
            dataIndex: "biography",
          },
          {
            title: "Date of release",
            dataIndex: "dateofrelease",
          },
        ]}
        dataSource={[
          {
            key: 1,
            artistName: (
              <div className={styles.imgdiv}>
                {" "}
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 2,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",

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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 3,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/Starboy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 4,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 5,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 6,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 7,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 8,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 9,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },

          {
            key: 10,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 11,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 12,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 13,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
          {
            key: 14,
            artistName: (
              <div className={styles.imgdiv}>
                <img src="/icons/StarBoy.svg" alt="" /> Starboy{" "}
              </div>
            ),
            biography: "The Weeknd",
            dateofrelease: "25/10/16",
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
                src={"/icons/blockIcon.svg"}
                alt="block"
                width={24}
                height={24}
              />
            ),
            dataIndex: "action",
            width: 24,
          },
        ]}
      />
    </div>
  );
};

export default Album;
