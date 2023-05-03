import '/styles/globals.css'
import '/styles/Header.css'
import '/styles/Skill.css'
import '/styles/Navbar.css'
import '/styles/About.css'
import '/styles/Project.css'
import '/styles/Contact.css'
import '/styles/Admin.css'
import { Karla } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const karla = Karla({subsets: ["latin"]})

export default function App({ Component, pageProps }) {

  return(
    <SessionProvider session={pageProps.session}>
      <main className={karla.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
