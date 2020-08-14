import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br />Nelson Seafood Research Centre
        </h1>

        <div className={styles.grid}>
          <Link href='/map'>
            <a className={styles.card}>
              <h3>Dashboard &rarr;</h3>
              <p>See overview of the tanks and status.</p>
            </a>
          </Link>
          <a href='#' className={styles.card}>
            <h3>Plan</h3>
            <p>Tools for Diet planning and Batch movements</p>
          </a>
          <a href='#' className={styles.card}>
            <h3>Today</h3>
            <p>My Tasks and Activities</p>
          </a>
          <a href='#' className={styles.card}>
            <h3>Insights</h3>
            <p>Reports, charts and data access</p>
          </a>

        </div>
      </main>

      <Footer />
    </div>
  )
}
