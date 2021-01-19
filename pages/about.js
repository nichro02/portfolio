import Link from 'next/link'
import Head from 'next/head'
import Layout from './layout'
import Image from 'next/image'
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
                        <p>
                            Please click on the icons below if you'd like to view my Github profile, LinkedIn profile, or resume.
                        </p>
                    </div>
                    <span className={styles.iconSpan}>
                        <a href='https://github.com/nichro02'>
                            <Image
                                src="/github-icon.png"
                                alt='Github profile'
                                width={30}
                                height={30}
                            />
                        </a>
                        <a href='https://www.linkedin.com/in/ross-nichols-gettysburg/'>
                            <Image
                                src="/linkedIn-icon.png"
                                alt='LinkedIn profile'
                                width={35}
                                height={30}
                            />
                        </a>
                        <a href ='https://drive.google.com/file/d/1jx7OtXPOwSoEPS5ANw-IJoosGO0zgMyu/view?usp=sharing'>
                            <Image
                                src="/resume.png"
                                alt='Resume'
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

export default About