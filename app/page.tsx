'use client'



import AddSongs from './Components/AddSongs/addSongs';
import ChangePassword from './Components/ChangePassword/ChangePassword';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main>

      <AddSongs userId={'add songs'}/>

    </main>
  );
}