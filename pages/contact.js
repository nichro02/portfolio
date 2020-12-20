import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from './layout'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    return(
        <Layout>
            <div className={styles.contactContainer}>
                <Head>
                    <title>
                        Contact Me
                    </title>
                </Head>

                <div>
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                        Click on the icons below, or send me a note!
                    </p>
                    <span>
                        <a href='https://github.com/nichro02'>
                            <Image
                                src="/../public/github-icon.png"
                                alt='Github link'
                                width={30}
                                height={30}
                            />
                        </a>
                        <a href='https://www.linkedin.com/in/ross-nichols-gettysburg/'>
                        <Image
                                src="/../public/linkedIn-icon.png"
                                alt='Github link'
                                width={35}
                                height={30}
                            />
                        </a>
                    </span>
                </div>
            </div>
        </Layout>
    )
}

export default Contact