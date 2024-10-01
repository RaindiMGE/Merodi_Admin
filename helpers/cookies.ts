'use client'

import { Domain } from "domain";

export function setCookies(name: string, value: string, day: number):void  {
    let expires = "";
    if (day) {
        const date = new Date()
        date.setTime(date.getTime() + (day * 24 * 60 * 60 * 1000))
        const expires = "expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

export function deleteCookie(name: string, path?: string, domain?: Domain) {
    let cookieString = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
    if (domain) {
        cookieString += `; domain=${domain}`;
    }
    document.cookie = cookieString;
}

export function getCookie(name: string) {
    if (typeof document === 'undefined') {
        return;
    }

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        const cookieValue = parts.pop();
        const finalValue = cookieValue?.split(';').shift();
        return finalValue;
    } else {
        console.log('Cookie not found');
    }
}
