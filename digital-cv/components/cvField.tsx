import { JobInformation } from "../model/jobInformation";
import styles from "../styles/cvField.module.css"

const CvField = (props:{jobs:JobInformation[]}) => {
    const {jobs} = props;
    let key = 1873;
    const getKey = () => {
        return key++;
    }
    return (
        <div className={styles.cv_field}>
            {jobs.map(job => (
                <div key={getKey()} className={styles.cv_field_job}>
                    <p>{`${job.jobTitle}, ${job.company} | ${!!job.timefrom ? job.timefrom : "now"} - ${!!job.timeto ? job.timeto : "now"}`}</p>
                    <p>{job.jobDescription}</p>
                </div>
            ))}
        </div>
        )
}

export default CvField;