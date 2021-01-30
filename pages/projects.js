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
                        <div className={styles.card}>
                            <Image
                                src='/dealOrNoDeal.png'
                                alt='Deal or No Deal picture'
                                width={500}
                                height={300}
                            />
                            <h3>Deal or No Deal</h3>
                            <p>
                                My take on the classic TV game show
                            </p>
                            <span className={styles.techSpan}>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>Javascript</li>
                            </span>
                            <span className={styles.buttonSpan}>
                                <a 
                                    href='https://github.com/nichro02/dealOrNoDeal' target='_blank'
                                >
                                    <button className={styles.button}>
                                        Github repo
                                    </button>
                                </a>
                                <a 
                                    href='https://nichro02.github.io/dealOrNoDeal/' target='_blank'
                                >
                                    <button className={styles.button}>
                                        Live site
                                    </button>
                                </a>
                            </span>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src='/poetryInMotion.png'
                                alt='Poetry in Motion picture'
                                width={500}
                                height={300}
                            />
                            <h3>Poetry in Motion</h3>
                            <p>
                                An app I designed to help people get their creative juices flowing
                            </p>
                            <span className={styles.techSpan}>
                                <li>Express</li>
                                <li>Javascript</li>
                                <li>Sequelize</li>
                                <li>APIs</li>
                            </span>
                            <span className={styles.buttonSpan}>
                                <a
                                    href='https://github.com/nichro02/poetry-in-motion'
                                    target='_blank'
                                >
                                    <button className={styles.button}>
                                        Github repo
                                    </button>
                                </a>
                                <a
                                    href='https://poetryinmotion.herokuapp.com/'
                                    target='_blank'
                                >
                                    <button className={styles.button}>
                                        Live site
                                    </button>
                                </a>
                            </span>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src='/chirper.png'
                                alt='Poetry in Motion picture'
                                width={500}
                                height={300}
                            />
                            <h3>Chirper</h3>
                            <p>
                                A social media app my group and I built as a project for General Assembly - think Twitter/Facebook reimagined
                            </p>
                            <span className={styles.techSpan}>
                                <li>Express</li>
                                <li>Javascript</li>
                                <li>Mongoose</li>
                                <li>React</li>
                            </span>
                            <span className={styles.buttonSpan}>
                                <a
                                    href='https://github.com/SFX818/Team-7-frontend'
                                    target='_blank'
                                >
                                    <button className={styles.button}>
                                        Frontend repo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/SFX818/Team-7-backend'
                                    target='_blank'
                                >
                                    <button className={styles.button}>
                                        Backend repo
                                    </button>
                                </a>
                                <a
                                    href='https://chirper.surge.sh/'
                                    target='_blank'
                                >
                                    <button className={styles.button}>
                                        Live site
                                    </button>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Projects