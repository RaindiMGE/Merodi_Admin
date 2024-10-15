'use client'

import { AlbumInfo, Music } from "@/app/(authorized)/Album/page";
import { ArtistInfo } from "@/app/(authorized)/Artist/page";
import { UserInfo } from "@/app/(authorized)/User/page"
import { PlaylistInfo } from "@/app/(authorized)/Playlists/page";
import { MusicInfo } from "@/app/Components/AddSongs/addSongs";
import React from "react";

export const findUserEmail = (id: number, data: UserInfo[]) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i].email;
        }
    }
}

export const findUsersIds = (choosenItemsKey: React.Key[], data: UserInfo[]) => {
    const choosenItems = choosenItemsKey.map((key) => Number(key) - 1)
    const usersIds = [];
    for (let i = 0; i < choosenItems.length; i++) {
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


export const findAlbumName = (id: number, data: AlbumInfo[]) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return `${data[i].title}`;
        }
    }
}

export const findAlbumsIds = (choosenItemsKey: React.Key[], data: AlbumInfo[]) => {
    const choosenItems = choosenItemsKey.map((key) => Number(key) - 1)
    const albumsIds = [];
    for (let i = 0; i < choosenItems.length; i++) {
        albumsIds.push(data[choosenItems[i]].id)
    }
    return albumsIds;
} 

export const findMusicName = (id: number, data: AlbumInfo) => {
    for (let i = 0; i < data.musics.length; i++) {
        if (data.musics[i].id === id) {
            return `${data.musics[i].name}`;
        }
    }
}

export const findMusicsIds = (choosenItemsKey: React.Key[], data: AlbumInfo) => {
    const choosenItems = choosenItemsKey.map((key) => Number(key))
    const musicsIds = [];
    const musics = data.musics;
    for (let i = 0; i < choosenItems.length; i++) {
        if(musics[i]) {
            musicsIds.push(musics[choosenItems[i]].id)
        }
    }
    return musicsIds;
} 

export const findSearch = (id: number, musics: Music[]) => {
    const neededMusics = []
    for (let i = 0; i < musics.length; i++) {
        if(musics[i].albumId == id) {
            neededMusics.push(musics[i])
        }
    }
    return neededMusics
}