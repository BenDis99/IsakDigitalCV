import client from '../client'
import styles from '../styles/Home.module.css'
import CvField from "../components/cvField";
import { WelcomeInformation } from '../model/welcomeInformation';
import { JobInformation } from '../model/jobInformation';



export default function Home(props:{welcomeInformation : WelcomeInformation}) {
  const {welcomeInformation} = props;
  return (
    <div>
      <h1 className={styles.title}>
        {welcomeInformation.title}
      </h1>
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