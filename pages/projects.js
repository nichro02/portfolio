import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from './layout'
import styles from '../styles/Project.module.css'

const Projects = () => {
    return(
        <Layout>
            <div className={styles.projectContainer}>
                <Head>
                    <title>
                        My Projects
                    </title>
                </Head>

                <div className={styles.main}>
                    <h1>
                        My Projects
                    </h1>
                    <div className={styles.grid}>
                        <a className={styles.card}>
                            <Image
                                src='/dealOrNoDeal.png'
                                alt='Deal or No Deal picture'
                                width={500}
                                height={300}
                            />
                            <h3>Deal or No Deal</h3>
                            <p>
                                My take on the classic TV game show.
                            </p>
                            <span className={styles.techSpan}>
                                <li>HTML</li>
                                <li>Javascript</li>
                                <li>CSS</li>
                            </span>
                            <span className={styles.buttonSpan}>
                                <a 
                                    href='https://github.com/nichro02/dealOrNoDeal' target='_blank'
                                >
                                    <button className={styles.button}>
                                        View Github repo
                                    </button>
                                </a>
                                <a 
                                    href='https://nichro02.github.io/dealOrNoDeal/' target='_blank'
                                >
                                    <button className={styles.button}>
                                        View live site
                                    </button>
                                </a>
                            </span>
                        </a>

                        <a className={styles.card}>
                            <Image
                                src='/../public/poetryInMotion.png'
                                alt='Poetry in Motion picture'
                                width={500}
                                height={300}
                            />
                            <h3>Poetry in Motion</h3>
                            <p>
                                An app I designed to help people get their creative juices on the flow.
                            </p>
                            <span className={styles.techSpan}>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>PostgreSQL</li>
                            </span>
                            <span className={styles.buttonSpan}>
                                <a
                                    href='https://github.com/nichro02/poetry-in-motion'
                                    target='_blank'
                                >
                                    <button className={styles.button}>
                                        View Github repo
                                    </button>
                                </a>
                                <a
                                    href='https://poetryinmotion.herokuapp.com/'
                                    target='_blank'
                                >
                                    <button className={styles.button}>
                                        View live site
                                    </button>
                                </a>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Projects