import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    
    return (
        <>
            <nav className={styles.navBar}>
                <div className={styles.navLinkHeader}>
                    <span className={styles.link}>
                        <Link href='/'>
                            <a title='home'>
                                <Image
                                    src='/home-icon.png'
                                    alt='Take me to the homepage'
                                    width={35}
                                    height={30}
                                />
                            </a>
                        </Link>
                    </span>
                    <span className={styles.navLinks}>
                        <span className={styles.link}>
                            <Link href='/about'>
                                <a title='About Me'>
                                    <Image
                                        src='/aboutme-icon.png'
                                        alt='Learn more about me'
                                        width={35}
                                        height={30}
                                    />
                                </a>
                            </Link>
                        </span>
                        <span className={styles.link}>
                            <Link href='/projects'>
                                <a title='Projects'>
                                    <Image
                                        src='/briefcase-icon.png'
                                        alt='View my projects'
                                        width={35}
                                        height={30}
                                    />
                                </a>
                            </Link>
                        </span>
                        <span className={styles.link}>
                            <a href='mailto:nichro02@gmail.com' title='Send me an email'>
                                <Image
                                    src='/envelope.png'
                                    alt='Email me at nichro02@gmail.com'
                                    width={30}
                                    height={24}
                                />
                            </a>
                        </span>
                    </span>
                </div>
            </nav>
            
            <div className={styles.container}>{children}</div>
            
            <footer className={styles.footer}>
                <div className={styles.footerDiv}>
                    <span className={styles.footerLinks}>
                        <span className={styles.link}>
                            <Link href='/about'>
                                <a title='About Me'>
                                    <Image
                                        src='/aboutme-icon.png'
                                        alt='Learn more about me'
                                        width={35}
                                        height={30}
                                    />
                                </a>
                            </Link>
                        </span>
                        <span className={styles.link}>
                            <Link href='/projects'>
                                <a title='Projects'>
                                    <Image
                                        src='/briefcase-icon.png'
                                        alt='View my projects'
                                        width={35}
                                        height={30}
                                    />
                                </a>
                            </Link>
                        </span>
                        <span className={styles.link}>
                            <a href='mailto:nichro02@gmail.com' title='Send me an email'>
                                <Image
                                    src='/envelope.png'
                                    alt='Email me at nichro02@gmail.com'
                                    width={30}
                                    height={24}
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