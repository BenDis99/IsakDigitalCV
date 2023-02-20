import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import styles from '../styles/Home.module.css'
import CvField from "../components/cvField";
import { WelcomeInformation } from '../model/welcomeInformation';
import { JobInformation } from '../model/jobInformation';



export default function Home(props:{welcomeInformation : WelcomeInformation, jobs : JobInformation[]}) {
  const {welcomeInformation, jobs} = props;
  return (
    <div>
      <h1 className={styles.title}>
        {welcomeInformation.title}
      </h1>
      <CvField jobs={jobs}/>
    </div>
  )
}
export async function getServerSideProps() {
  const welcomeInformation = await client.fetch(
    `*[_type == "welcomeInformation"][0]`
  ) as WelcomeInformation
  const jobs = await client.fetch(
    `*[_type == "jobInformation"]`
  ) as JobInformation[]
  return {
    props: {
      welcomeInformation,
      jobs
    },
  }
}