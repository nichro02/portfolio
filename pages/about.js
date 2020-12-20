import Link from 'next/link'
import Head from 'next/head'
import Layout from './layout'
import styles from '../styles/About.module.css'

const About = () => {
    return(
        <Layout>
            <div className={styles.aboutMeContainer}>
                <Head>
                    <title>
                        About Me
                    </title>
                </Head>

                <div className={styles.textBox}>
                    <h1>
                        About Me
                    </h1>
                    <div>
                        <p>
                            I am a software engineer located in Denver, Colorado. I started my career as an English instructor in South Korea, and have over six years of experience in strategic consultant roles. These roles have helped me develop a creative approach to problem-solving, sharpen my ability to set and manage expectations, and understand the importance of catering communications to my intended audience.   
                        </p>
                        <p>
                            When I'm not coding, I read as much as I can, see as much of the world as possible, try new foods, play Ultimate Frisbee, and run.
                        </p>
                    </div>
                    
                </div>
            </div>
        </Layout>
    )
}

export default About