import client from "../client";
import CvField from "../components/cvField";
import CenteredPageContainer from '../components/pageContainers/CenteredPageContainer';
import { JobInformation } from "../model/jobInformation";
import styles from '../styles/Home.module.css'

const Career = (props:{jobs : JobInformation[]}) => {
    const {jobs} = props;
    return (
      <CenteredPageContainer>
        <h1 className={styles.title}>
            My jobs
        </h1>
        <CvField jobs={jobs}/>
      </CenteredPageContainer>
    )
  }

export async function getServerSideProps() {
    const jobs = await client.fetch(
        `*[_type == "jobInformation"]`
    ) as JobInformation[]
    return {
        props: {
            jobs
        },
    }
}
export default Career;