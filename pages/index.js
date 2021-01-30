import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
//import Layout from './layout'
import Layout from '../components/Layout'
import Project from '../components/Project'
import Contact from '../components/Contact'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
      <Head>
        <title>Ross Nichols - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hi! I'm Ross
          </h1>

          <p className={styles.description}>
            Thanks for stopping by! I'm a Denver-based software engineer who loves thinking about creative ways to solve problems. Continue scrolling to learn more about me, view my projects, and find my contact information.
          </p>

          <a id='about'>
            <div>
              <div className={styles.sectionHeader}>
                <h3 className={styles.title}>About Me</h3>
              </div>
              <div className={styles.aboutBox}>
                <aside className={styles.imageBox}>
                  <Image
                    src='/profile-icon.jpg'
                    alt='Headshot'
                    width={200}
                    height={200}
                  />
                </aside>
                
                  <p className={styles.about}>
                    Before embarking upon my journey as a software engineer, I was an English teacher in South Korea and a strategic consultant in San Francisco. I was drawn to coding because it is grounded in logic and requires an endless appetite for learning.
                    <br />
                    <br />
                    When I'm not coding, I read, travel, and eat. 
                  </p>
                
              </div>
            </div>
          </a>
          <a id='projects'>
            <div className={styles.sectionHeader}>

              <h3 className={styles.title}>Projects</h3>
              <p className={styles.description}>Check out what I've been working on</p>
            </div>
          </a>
          <Project
            src='/dealOrNoDeal.png'
            alt='Deal or No Deal screenshot'
            title='Deal or No Deal'
            description='My take on the classic TV game show'
            tech_stack={['CSS', 'HTML', 'Javascript']}
            github='https://github.com/nichro02/dealOrNoDeal'
            live_site='https://nichro02.github.io/dealOrNoDeal/'
          />

          <Project
            src='/poetryInMotion.png'
            alt='Poetry in Motion screenshot'
            title='Poetry in Motion'
            description='A full-stack app I designed to help people get their creative juices flowing. Users can create an account that will retrieve a random Unsplash image to inspire their writing'
            tech_stack={['Express','Javascript','SQL','Unsplash']}
            github='https://github.com/nichro02/poetry-in-motion'
            live_site='https://poetryinmotion.herokuapp.com/'
          />

          <Project
            src='/chirper.png'
            alt='Chirper screenshot'
            title='Chirper'
            description='A full-stack social media app my group and I built as a project for General Assembly - think Twitter/Facebook reimagined'
            tech_stack={['Express','Javascript','Mongoose','React']}
            github='https://github.com/SFX818/Team-7-frontend'
            live_site='https://chirper.surge.sh/'
          />


          <a id='contact'>
            <div className={styles.sectionHeader}>

              <h3 className={styles.title}>Contact Me</h3>
              <p className={styles.description}>Get in touch!</p>
            </div>
          </a>

          <span className={styles.contactSpan}>
            <Contact
              link='https://github.com/nichro02'
              src='/github-icon.png'
              alt='Github'
            />
            <Contact
              link='https://www.linkedin.com/in/ross-nichols-gettysburg/'
              src='/linkedIn-icon.png'
              alt='LinkedIn'
            />
            <Contact
              link='mailto:nichro02@gmail.com'
              src='/envelope.png'
              alt='Email'
            />
            <Contact
              link='/resume.pdf'
              src='/resume.png'
              alt='Resume'
            />
          </span>

        </main>
      </div>
    </Layout>
  )
}
