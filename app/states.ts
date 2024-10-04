import { atom } from "recoil";
import { AlbumInfo } from "./(authorized)/Album/page";
import { ArtistInfo } from "./(authorized)/Artist/page";

export const activeAsideMenuId = atom({
    key: 'activeAsideMenuId',
    default: 1,
})


export const artistInfo = atom<ArtistInfo[]>({
    key: 'artistInfo',
    default: [],
})

