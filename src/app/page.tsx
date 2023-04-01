import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import logo from '../../public/logo.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={logo} alt=''/>
    </main>
  )
}
