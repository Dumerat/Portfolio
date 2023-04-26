import Styles from '/styles/Footer.module.css'
import Image from 'next/image'

export default function Footer() {

    return(
        <footer className={Styles.footer}>
            <div>
                <Image src='/images/logo/github.svg' alt='github' width={30} height={30} onClick={() => window.open("https://github.com/Dumerat")}/>
                <a href="mailto:dumeratonlaveur@gmail.com">
                <Image src='/images/logo/mail.svg' alt='mail' width={30} height={30} onClick={() => "window.location.href='mailto:angel.uriot@gmail.com'"}/>
                </a>
                <Image src='/images/logo/linkedin.svg' alt='linkedIn' width={30} height={30} onClick={() => window.open("https://github.com/Dumerat")}/>
            </div>
                <h3>Yoan</h3>
        </footer>
    )
}