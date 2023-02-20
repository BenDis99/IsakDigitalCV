import client from '../client'
import styles from '../styles/Home.module.css'
import { WelcomeInformation } from '../model/welcomeInformation';
import Image from 'next/image';
import background from "../public/assets/dashboard_background.jpg";



export default function Home(props:{welcomeInformation : WelcomeInformation}) {
  const {welcomeInformation} = props;
  return (
    <div className={styles.content}>
      <Image 
        className={styles.background}
        src={background}
        alt="background">
      </Image>
      <div className={styles.page_content}>
        <h1 className={styles.title}>
          {welcomeInformation.title}
        </h1>
        <h3 className={styles.description}>
          {welcomeInformation.description}
        </h3>
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  const welcomeInformation = await client.fetch(
    `*[_type == "welcomeInformation"][0]`
  ) as WelcomeInformation;
  return {
    props: {
      welcomeInformation
    },
  }
}