"use client";

import AddInfoModel, { FormValues } from "@/app/Components/AddInfoModel/AddInfoModel";
import { useRouter, useSearchParams } from "next/navigation";
import { BaseSyntheticEvent, Suspense, useEffect, useState } from "react";
import styles from './page.module.scss';
import axios from "axios";
import { getCookie } from "@/helpers/cookies";
import InfoPopUp from "@/app/Components/Pop-ups/ErrorPop-up/InfoPop-ups";
import { useRecoilState } from "recoil";
import { activeAsideMenuId } from "@/app/states";
import { UploadedFileInfo } from "../../Album/AddAlbum/page";

const AddArtist = () => {
    return <Suspense>
        <AddArtistContent />
    </Suspense>
};

export interface ArtistInfo {
    firstName: string;
    lastName: string;
    biography: string;
    imageUrl: File;
}

const AddArtistContent = () => {
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false);
    const searchParams = useSearchParams();
    const [id, setId] = useState<null | string>(null);
    const token = getCookie('token')
    const [artistInfo, setArtistInfo] = useState<ArtistInfo>()
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [errorType, setErrorType] = useState<'success' | 'error'>();
    const [showErrorPopUp, setShowErrorPopUp] = useState(false)
    const [activeAside, setActiveAside] = useRecoilState(activeAsideMenuId);

    useEffect(() => {
        setActiveAside(2);
    }, [])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        if (isMounted && searchParams) {
            setId(searchParams.get('id'))
        }
    }, [searchParams, isMounted])

    const getArtistInfo = async () => {
        try {
            const response = await axios.get(`https://merodibackend-2.onrender.com/author/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setArtistInfo(response.data)
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if (id) {
            getArtistInfo()
        }
    }, [id])

    console.log(artistInfo);

    const editedInfoUpload = (data: ArtistInfo) => {
        const formData = new FormData()
        formData.append('file', data.imageUrl)

        axios.post(`https://merodibackend-2.onrender.com/files/upload`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                const file: UploadedFileInfo = res.data;
                addEditedInfoToServer(data, file.id);
            })
            .catch((err) => {
                setErrorMessage('Operation failed. Please try again')
                setErrorType('error')
                setShowErrorPopUp(true)
            })
    }

    const addEditedInfoToServer = (data: ArtistInfo, fileId: number) => {
        const newData = {
            firstName: data.firstName,
            lastName: data.lastName,
            biography: data.biography,
            imageId: fileId,
        }
        axios.patch(`https://merodibackend-2.onrender.com/author/${id}`, newData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setErrorMessage(`Artist Updated`)
                setErrorType('success')
            })
            .catch((err) => {
                setErrorMessage('Operation failed. Please try again')
                setErrorType('error')
                setShowErrorPopUp(true)
            })
            .finally(() => {
                setShowErrorPopUp(true)
            })
    }

    const addNewInfoToServer = (fileId: number, data: ArtistInfo) => {
        const newData = {
            firstName: data.firstName,
            lastName: data.lastName,
            biography: data.biography,
            imageId: fileId,
        }
        axios.post('https://merodibackend-2.onrender.com/author', newData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setErrorMessage(`Artist Added`)
                setErrorType('success')
            })
            .catch((err) => {
                setErrorMessage('Operation failed. Please try again')
                setErrorType('error')
            })
            .finally(() => {
                setShowErrorPopUp(true)
            })
    }

    const newInfoUpload = (data: ArtistInfo) => {
        setShowErrorPopUp(false);
        const formData = new FormData()
        formData.append('file', data.imageUrl)

        axios.post('https://merodibackend-2.onrender.com/files/upload', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                const file: UploadedFileInfo = res.data;
                addNewInfoToServer(file.id, data)
            })
            .catch((err) => {
                setErrorMessage('Operation failed. Please try again')
                setErrorType('error')
                setShowErrorPopUp(true)
            })
    }

    const onSubmitClick = (data: FormValues) => {
        const artistName = data.artistName.split(' ');
        const newData = {
            firstName: artistName[0],
            lastName: artistName[1],
            biography: data.biography,
            imageUrl: data.file[0]
        }
        if (id) {
            editedInfoUpload(newData);
        } else {
            newInfoUpload(newData);
        }
    }

    const onCancelClick = () => {
        router.push('/Artist')
    }
    return (
        <>
            {showErrorPopUp && <div className={styles.errorPopUp}>
                <InfoPopUp message={errorMessage} type={errorType} />
            </div>}
            <div className={styles.container}>
                Taylor Swift__17 <br />
                Taylor Swift 1 is an American singer-songwriter, born on December 13, 1989, in Reading, Pennsylvania. She is known for her narrative songwriting, which often reflects her personal life. Swift's musical style has evolved from country to pop and indie/folk over the years, contributing to her widespread popularity and critical acclaim

                <AddInfoModel onCancelClick={onCancelClick} onSubmit={onSubmitClick} />
            </div>
        </>
    );
}

export default AddArtist;
