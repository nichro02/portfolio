import Head from 'next/head'
import Image from 'next/image'
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
            Thanks for stopping by! I'm a Denver-based business analyst and software engineer who loves thinking about creative ways to solve problems. I leverage my natural curiosity to innovate and continuously improve. Continue scrolling to learn more about me, view my projects, and find my contact information.
          </p>

          <a id='about'>
            <div>
              <div className={styles.sectionHeader}>
                <h3 className={styles.title}>About Me</h3>
              </div>
              <div className={styles.aboutBox}>
                <div className={styles.imageBox}>
                  <Image
                    src='/profile-icon.jpg'
                    alt='Headshot'
                    width={200}
                    height={200}
                  />
                </div>
                
                  <p className={styles.about} padding={20}>
                    Before embarking upon my journey as a software engineer, I was an English teacher in South Korea and a strategic consultant in San Francisco, where I was a trusted advisor whose insights helped drive organizational growth. I was drawn to coding because it is grounded in logic and requires an endless appetite for learning.
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
          <div className={styles.projectGrid}>
          <Project
            src='/dealOrNoDeal.png'
            alt='Deal or No Deal screenshot'
            title='Deal or No Deal'
            description='My take on the classic TV game show. This game leverages DOM manipulation for an interactive player experience'
            tech_stack={['CSS', 'HTML', 'Javascript']}
            github='https://github.com/nichro02/dealOrNoDeal'
            live_site='https://nichro02.github.io/dealOrNoDeal/'
          />

          <Project
            src='/poetryInMotion.png'
            alt='Poetry in Motion screenshot'
            title='Poetry in Motion'
            description="A full-stack app to help users get their creative juices flowing, I use Unsplash's API to fetch a random image to inspire each post"
            tech_stack={['Express','Javascript','SQL','Unsplash']}
            github='https://github.com/nichro02/poetry-in-motion'
            live_site='https://poetryinmotion.herokuapp.com/'
          />

          <Project
            src='/chirper.png'
            alt='Chirper screenshot'
            title='Chirper'
            description='A full-stack social media app built by three other engineers and myself  - think Twitter/Facebook reimagined'
            tech_stack={['Express','Javascript','Mongoose','React']}
            github='https://github.com/SFX818/Team-7-frontend'
            live_site='https://chirper.surge.sh/'
          />

          <Project
            src='/PortfolioScreenshot_042422.png'
            alt='Portfolio screenshot'
            title='My Portfolio'
            description='You are looking a living project of mine! I have rebuilt my portfolio several times and am continuing to improve it'
            tech_stack={['React', 'NextJS']}
            github='https://github.com/nichro02/portfolio'
            live_site='https://portfolio.nichro02.vercel.app/'
          />
          </div>


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
              link='/resume_101221.pdf'
              src='/resume.png'
              alt='Resume'
            />
          </span>

        </main>
      </div>
    </Layout>
  )
}
