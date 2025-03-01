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
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const AddArtist = () => {
    return <Suspense>
        <AddArtistContent />
    </Suspense>
};

export interface ArtistInfo {
    firstName: string;
    lastName: string;
    biography: string;
    imageUrl: File | string;
}

interface Artist {
    firstName: string;
    lastName: string;
    biography: string;
    imageUrl: StaticImport | string;
}

const AddArtistContent = () => {
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false);
    const searchParams = useSearchParams();
    const [id, setId] = useState<null | string>(null);
    const token = getCookie('token')
    const [artistInfo, setArtistInfo] = useState<Artist>()
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
        }
    }

    useEffect(() => {
        if (id) {
            getArtistInfo()
        }
    }, [id])

    const editedInfoUpload = (data: FormValues) => {
        const formData = new FormData()
        formData.append('file', data.file[0])

        if(data.file.length !== 0) {
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
        else {
            getData(data)
        }
    }

    const addEditedInfoToServer = (data: FormValues, fileId: number) => {
        const artist = data.artistName.split(' ')
        const newData = {
            firstName: data.artistName ? artist[0] : null,
            lastName: data.artistName ? artist[1] : null,
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
                router.push('/Artist')
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
            lastName: data.lastName ? data.lastName : '',
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

    const getData = (data: FormValues) => {
        const artist = data.artistName && data.artistName.split(' ');
        const newData = {
            firstName: data.artistName ? artist[0] : null,
            lastName: (data.artistName && artist[1]) ? artist[1] : null,
            biography: data.biography ? data.biography : null,
        }
        axios.patch(`https://merodibackend-2.onrender.com/author/${id}`, newData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setErrorMessage(`Artist Updated`)
                setErrorType('success')
                router.push('/Artist')
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
        const updatedData = {
            firstName: artistName[0],
            lastName: artistName[1],
            biography: data.biography,
            imageUrl: data.file
        }
        if (id) {
            editedInfoUpload(data);
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

                {artistInfo ? <AddInfoModel data={{
                    artistName: `${artistInfo?.firstName} ${artistInfo?.lastName}`,
                    biography: artistInfo?.biography,
                    file: artistInfo.imageUrl,
                }} onCancelClick={onCancelClick} onSubmit={onSubmitClick} /> : <AddInfoModel  onCancelClick={onCancelClick} onSubmit={onSubmitClick} />}
            </div>
        </>
    );
}

export default AddArtist;
