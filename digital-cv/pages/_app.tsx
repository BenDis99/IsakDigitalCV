import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <Head>
      <title>Isaks digital CV</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.main}><Component {...pageProps} /></main>
    <Footer />
    
  </div>
}
