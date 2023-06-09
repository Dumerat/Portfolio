import Head from 'next/head'
import Skill from '/components/Skill'
import Header from '/components/Header'
import Navbar from '/components/Navbar'
import styles from '/styles/Home.module.css'
import About from '/components/About'
import Project from '/components/Project'
import Contact from '/components/Contact'
import Footer from '/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yoan Portfolio </title>
        <meta name="description" content="Portfolio de Dumerat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Header/>

      <main className={styles.main}>
        <About/>
        <Project/>
        <Skill/>
        <Contact/>
      </main>

      <Footer/>
    </>
  )
}
