import { JwtPayload } from 'jwt-decode';

declare module 'jwt-decode' {
    export interface JwtPayload {
        userId?: string;
        role?: 'user' | 'admin'
    }
}