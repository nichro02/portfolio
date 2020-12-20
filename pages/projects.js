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
                            <h3>Deal or No Deal &rarr;</h3>
                            <p>
                                My take on the classic TV game show.
                            </p>
                            <span>

                            </span>
                            <span>
                                <button>
                                    View Github repo
                                </button>
                                <button>
                                    View live site
                                </button>
                            </span>
                        </a>

                        <a className={styles.card}>
                            <h3>Poetry in Motion &rarr;</h3>
                            <p>
                                An app I designed to help people get their creative juices on the flow.
                            </p>
                            <span>

                            </span>
                            <span>
                                <button>
                                    View Github repo
                                </button>
                                <button>
                                    View live site
                                </button>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Projects