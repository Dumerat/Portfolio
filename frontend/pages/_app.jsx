import '@/styles/globals.css'
import '@/styles/Header.css'
import '@/styles/Skill.css'
import { Karla } from 'next/font/google'
import { Inconsolata } from 'next/font/google'

const karla = Karla({subsets: ["latin"]})

export default function App({ Component, pageProps }) {

  return(
    <main className={karla.className}>
      <Component {...pageProps} />
    </main>
  )
}
