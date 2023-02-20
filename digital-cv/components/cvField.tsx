import { JobInformation } from "../model/jobInformation";
import styles from "../styles/cvField.module.css"

const CvField = (props:{jobs:JobInformation[]}) => {
    const {jobs} = props;
    return (
        <div className={styles.cv_field}>
            <dl>
            {jobs.reverse().map(job => (<>
                <dt>{`${job.jobTitle}, ${job.company} | ${!!job.timefrom ? job.timefrom : "now"} - ${!!job.timeto ? job.timeto : "now"}`}</dt>
                <dd className={styles.descriptionText}>{job.jobDescription}</dd>
            </>))}
            </dl>
        </div>
        )
}


export default CvField;