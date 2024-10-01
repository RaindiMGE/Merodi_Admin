"use client";

import AddInfoModel, { FormValues } from "@/app/Components/AddInfoModel/AddInfoModel";
import { useRouter, useSearchParams } from "next/navigation";
import { BaseSyntheticEvent, Suspense, useEffect, useState } from "react";
import styles from './page.module.scss';
import axios from "axios";
import { getCookie } from "@/helpers/cookies";

const AddArtist = () => {
    return <Suspense>
        <AddArtistContent />
    </Suspense>
};

export interface ArtistInfo {
    firstName: string;
    lastName: string;
    biography: string;
    imageUrl: string;
}

const AddArtistContent = () => {
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false);
    const searchParams = useSearchParams();
    const [id, setId] = useState<null | string>(null);
    const token = getCookie('token')
    const [artistInfo, setArtistInfo] = useState<ArtistInfo>()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        if (isMounted && searchParams) {
            setId(searchParams.get('id'))
        }
    }, [searchParams, isMounted])

    const getArtistInfo = async () => {
        try{
            const response = await axios.get(`http://localhost:3000/api/artists/${id}`, {
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

    const editedInfoUpload = (data: any) => {
        const formData = new FormData()
        formData.append('firstName', data.firstName)
        formData.append('lastName', data.lastName)
        formData.append('biography', data.biography)
        formData.append('file', data.imageUrl)

        axios.patch(`https://merodibackend-2.onrender.com/author/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            alert('Artist Updated');
        })
        .catch((err) => {
            console.error(err);
        })
    }

    const newInfoUpload = (data: any) => {
        const formData = new FormData()
        formData.append('firstName', data.firstName)
        formData.append('lastName', data.lastName)
        formData.append('biography', data.biography)
        formData.append('file', data.imageUrl)

        const newData = {
            firstName: data.firstName,
            lastName: data.lastName,
            biography: data.biography,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSn2TQYLMUYiIJmqcO6ngy7KGqXZbMyehTA&s'
        }

        axios.post('https://merodibackend-2.onrender.com/author', newData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            alert('Artist Added');
        })
        .catch((err) => {
            console.error(err);
        })
    }

    const onSubmitClick = (data: FormValues) => {
        const artistName = data.artistName.split(' ');
        const newData = {
            firstName: artistName[0],
            lastName: artistName[1],
            biography: data.biography,
            imageUrl: data.file
        }
        if(id) {
            editedInfoUpload(newData);
        } else {
            newInfoUpload(newData);
        }
    }

    const onCancelClick = () => {
        router.push('/Artist')
    }
    return (
        <div className={styles.container}>
            Taylor Swift__17 <br/>
            Taylor Swift 1 is an American singer-songwriter, born on December 13, 1989, in Reading, Pennsylvania. She is known for her narrative songwriting, which often reflects her personal life. Swift's musical style has evolved from country to pop and indie/folk over the years, contributing to her widespread popularity and critical acclaim
            
            <AddInfoModel onCancelClick={onCancelClick} onSubmit={onSubmitClick} />
        </div>
    );
}

export default AddArtist;
