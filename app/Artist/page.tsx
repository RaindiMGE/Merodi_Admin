"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import AntTable from "../Components/AntTable/Table";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import Button from "../Components/Buttons/PrimaryButton/primaryButtons";

const Artist = () => {
  const [userId, setUserId] = useState<null | Number>(null);
  return (
    <div>
      <div className={styles.maintwo}>
        <SearchComponent />
        <Button title={"Add Artist"} />
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
            title: "Date added",
            dataIndex: "dateadded",
          },
        ]}
        dataSource={[
          {
            key: 1,
            artistName: (
              <div className={styles.imgdiv}>
                {" "}
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",

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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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
                <img src="/icons/ceotwo.svg" alt="" /> Cleo Col{" "}
              </div>
            ),
            biography: "Cleo Sol is a British singer-songwriter known for...",
            dateadded: "09/04/15",
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

export default Artist;
