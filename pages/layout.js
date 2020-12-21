import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    
    return (
        <>
            <nav className={styles.navBar}>
                <div>
                    <div className={styles.navLinkHeader}>
                    <Link href='/'>
                        <a>
                            <Image
                                src="/../public/home-icon.png"
                                alt='Email me at nichro02@gmail.com'
                                width={35}
                                height={30}
                            />
                        </a>
                    </Link>
                    <span className={styles.navLinks}>
                    <span className={styles.link}>
                    <Link href='/about'>
                        About Me
                    </Link>
                    </span>
                    <span className={styles.link}>
                    <Link href='/projects'>
                        Projects
                    </Link>
                    </span>
                    <span className={styles.link}>
                        <a href='mailto:nichro02@gmail.com'>
                            <Image
                                src="/../public/envelope.png"
                                alt='Email me at nichro02@gmail.com'
                                width={35}
                                height={30}
                            />
                        </a>
                    </span>
                    </span>
                    </div>
                </div>
            </nav>
            
            <div className={styles.container}>{children}</div>
            
            <footer className={styles.footer}>
                <div className={styles.footerDiv}>
                    <span className={styles.footerLinks}>
                        <span className={styles.link}>
                            <Link href='/about'>
                                About Me
                            </Link>
                        </span>
                        <span className={styles.link}>
                            <Link href='/projects'>
                                Projects
                            </Link>
                        </span>
                        <span className={styles.link}>
                            <a href='mailto:nichro02@gmail.com'>
                                <Image
                                    src="/../public/envelope.png"
                                    alt='Email me at nichro02@gmail.com'
                                    width={35}
                                    height={30}
                                />
                            </a>
                        </span>
                    </span>
                    <h6 className={styles.footerText}>Website created by Ross Nichols, built on NextJS</h6>
                </div>
            </footer>
        </>
    )
}

export default Layout