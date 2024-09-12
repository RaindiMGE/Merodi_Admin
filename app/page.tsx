'use client'


import ChangePassword from './Components/ChangePassword/ChangePassword';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <ChangePassword userId={'change password'}/>
    </main>
  );
}