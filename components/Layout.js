import Link from 'next/link'
import Image from 'next/image'

import Contact from './Contact'

import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    
    return (
        <>
            <nav className={styles.navBar}>
                <div className={styles.navLinkHeader}>
                    <span className={styles.homeLink}>
                        <Link href='/'>
                            <a 
                                title='home'
                                className={styles.greetingText}
                            >
                                Ross Nichols | Full-stack Engineer
                            </a>
                        </Link>
                    </span>

                    <span className={styles.navLinks}>
                        <span className={styles.link}>
                            <Link href='#about'>
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
                            <Link href='#projects'>
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
                            <Link href='#contact'>
                                <a title='Contact'>
                                    <Image
                                        src='/pencil.png'
                                        alt='How to contact me'
                                        width={35}
                                        height={30}
                                    />
                                </a>
                            </Link>
                        </span>
                    </span>
                </div>
            </nav>
            
            <div className={styles.container}>{children}</div>
            
            <footer className={styles.footer}>
                <div className={styles.footerDiv}>
                    <span className={styles.footerLinks}>
                        <span className={styles.link}>
                            <a title='Github'>
                                <Contact
                                    link='https://github.com/nichro02'
                                    src='/github-icon.png'
                                    alt='Github'
                                />
                            </a>
                        </span>
                        <span className={styles.link}>
                            <a title='LinkedIn'>
                                <Contact
                                    link='https://www.linkedin.com/in/ross-nichols-gettysburg/'
                                    src='/linkedIn-icon.png'
                                    alt='LinkedIn'
                                />
                            </a>
                        </span>
                        <span className={styles.link}>
                            <a title='Resume'>
                                <Contact
                                    link='/resume.pdf'
                                    src='/resume.png'
                                    alt='Resume'
                                />
                            </a>
                        </span>

                    </span>
                    <h6 className={styles.footerText}>

                        * Flamingo favicon courtesy of Freepik on  flaticon
                        
                    </h6>

                </div>
            </footer>
        </>
    )
}

export default Layout