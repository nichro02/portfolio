import Link from 'next/link'

import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    
    /*window.onscroll = function() {stickyHeader}

    const header = document.getElementsByClassName('navBar')
    const sticky = header.offsetTop

    function stickyHeader() {
        if(window.pageYOffset > sticky) {
            header.classList.add('activeNavBar')
        } else {
            header.classList.remove('activeNavBar')
        }
    }
    */
    
    return (
        <>
            <nav className={styles.navBar}>
                <div>
                    <div className={styles.navLinkHeader}>
                    <Link href='/'>
                        Home
                    </Link>
                    <span className={styles.navLinks}>
                    <span className={styles.link}>
                    <Link href='/about'>
                        About
                    </Link>
                    </span>
                    <span className={styles.link}>
                    <Link href='/projects'>
                        Projects
                    </Link>
                    </span>
                    <span className={styles.link}>
                    <Link href='/contact'>
                        Contact
                    </Link>
                    </span>
                    </span>
                    </div>
                    {/*<div className={styles.introBlock}>
                        <h1 className={styles.greetingText}>Ross Nichols </h1>
                        <h2 className={styles.introText}>
                        Software Engineer
                        </h2>
                    </div>*/}
                    
                </div>
            </nav>
            
            <div className={styles.container}>{children}</div>
            
            <footer className={styles.footer}>
                <div className={styles.footerDiv}>
                    <span className={styles.footerLinks}>
                        <span className={styles.link}>
                            <Link href='/about'>
                                About
                            </Link>
                        </span>
                        <span className={styles.link}>
                            <Link href='/projects'>
                                Projects
                            </Link>
                        </span>
                        <span className={styles.link}>
                            <Link href='/contact'>
                                Contact
                            </Link>
                        </span>
                    </span>
                    <h6 className={styles.footerText}>Website created by Ross Nichols, built on NextJS</h6>
                </div>
            </footer>
        </>
    )
}

export default Layout