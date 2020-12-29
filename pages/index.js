import Head from 'next/head'
//import Link component to enable navigation within app
import Link from 'next/link'
import Layout from './layout'
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
            Welcome to My Portfolio!
          </h1>

          <p className={styles.description}>
            I'm Ross. Thanks for stopping by! I'm a software engineer who loves thinking about creative ways to solve problems. You can learn more about me, view my projects, and find my contact information by clicking on the boxes below.
          </p>

          <div className={styles.grid}>
            <Link
              href="/about"
            >
              <a className={styles.card}>
                <h3>About &rarr;</h3>
                <p>Learn more about me</p>
              </a>
            </Link>

            <Link 
              href="/projects"
            >
              <a className={styles.card}>
                <h3>Projects &rarr;</h3>
                <p>Look at what I've been working on</p>
              </a>
            </Link>
            
            <Link
              href="/contact"
            >
              <a className={styles.card}>
                <h3>Contact &rarr;</h3>
                <p>Get in touch</p>
              </a>
            </Link>
            
          </div>
        </main>
      </div>
    </Layout>
  )
}
