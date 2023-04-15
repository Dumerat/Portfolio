import Head from 'next/head'
import Image from 'next/image'
import Skill from '../components/Skill'
import Header from '../components/Header'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio de Dumerat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      
      <main className={styles.main}>
        <Skill/>
        <p>TEST</p>
        
      </main>
      
      <script src="particles.js"></script>
    </>
  )
}
