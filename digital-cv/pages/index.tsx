import client from '../client'
import styles from '../styles/Home.module.css'
import aboutStyles from "../styles/About.module.css";
import { WelcomeInformation } from '../model/welcomeInformation';
import background from "../public/assets/dashboard_background.jpg";
import profilePic from "../public/assets/profile.jpg"
import CenteredPageContainer from '../components/pageContainers/CenteredPageContainer';
import Image from "next/image"



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
      <Image className={aboutStyles.profileImage} src={profilePic} alt="picture of a lovely pal with glasses and a beard"/>
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