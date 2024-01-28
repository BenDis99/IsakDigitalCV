import { JobInformation } from "../model/jobInformation";
import styles from "../styles/cvField.module.css"

const CvField = (props:{jobs:JobInformation[]}) => {
    const {jobs} = props;
    return (
        <div className={styles.jobs_content}>
            <dl className={styles.jobs_list}>
            {jobs.reverse().map(job => (
                <div key={`${job.company}-${job.jobTitle}`}>
                    <dt>{`${job.jobTitle}, ${job.company} | ${!!job.timefrom ? job.timefrom : "now"} - ${!!job.timeto ? job.timeto : "now"}`}</dt>
                    <dd className={styles.descriptionText}>{job.jobDescription}</dd>
                </div>))}
            </dl>
        </div>
        )
}
export default CvField;