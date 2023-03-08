import client from '../client'
import styles from '../styles/Home.module.css'
import { WelcomeInformation } from '../model/welcomeInformation';
import Image from 'next/image';
import background from "../public/assets/dashboard_background.jpg";
import Poseidon from '../components/illustartion/Poseidon';
import CenteredPageContainer from '../components/pageContainers/centeredPageContainer';



export default function Home(props:{welcomeInformation : WelcomeInformation}) {
  const {welcomeInformation} = props;
  return (
    <CenteredPageContainer
      background={background}
      blur={true}
    >
      <h1 className={styles.title}>
        {welcomeInformation.title}
      </h1>
      <h3 className={styles.description}>
        {welcomeInformation.description}
      </h3>
      <Poseidon />
    </CenteredPageContainer>
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