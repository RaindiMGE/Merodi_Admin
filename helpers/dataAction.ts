'use client'

import { ArtistInfo } from "@/app/(authorized)/Artist/page";
import { UserInfo } from "@/app/(authorized)/page"
import { PlaylistInfo } from "@/app/(authorized)/Playlists/page";
import React from "react";

export const findUserEmail = (id: number, data: UserInfo[]) => {
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === id) {
            return data[i].email;
        }
    }
}

export const findUsersIds = (choosenItemsKey: React.Key[], data: UserInfo[]) => {
    const choosenItems = choosenItemsKey.map((key) => Number(key) - 1)
    const usersIds = [];
    for(let i = 0; i < choosenItems.length; i++) {
        usersIds.push(data[choosenItems[i]].id)
    }
    return usersIds;
} 

export const getAddedTime = (createdAt: string) => {
    const date = new Date(createdAt);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit' 
    };
    return date.toLocaleString('ge-GE', options)
}

export const findArtistName = (id: number, data: ArtistInfo[]) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return `${data[i].firstName} ${data[i].lastName}`;
        }
    }
}

export const findPlaylistTitle = (id: number, data: PlaylistInfo[]) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i].title;
        }
    }
}

export const findArtistsIds = (choosenItemsKey: React.Key[], data: ArtistInfo[]) => {
    const choosenItems = choosenItemsKey.map((key) => Number(key) - 1)
    const artistsIds = [];
    for (let i = 0; i < choosenItems.length; i++) {
        artistsIds.push(data[choosenItems[i]].id)
    }
    return artistsIds;
} 
