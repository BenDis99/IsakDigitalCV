import styles from "../styles/cvField.module.css"

type jobType = {jobTitle: string, company: string, timefrom: Date, timeto: Date, jobDescription: string, key:string}
const CvField = (props:any) => {
    const {jobs} = props;
    let allJobs = jobs as jobType[]
    let uniqueNr = 123;
    for(let i = 0; i < allJobs.length; i++){
        allJobs[i].key = `${123 + i}`;
    }
    
    return (
        <div className={styles.cv_field}>
            {allJobs.map(job => (
                <div key={job.key} className={styles.cv_field_job}>
                    <p>{`${job.jobTitle}, ${job.company} | ${!!job.timefrom ? job.timefrom : "now"} - ${!!job.timeto ? job.timeto : "now"}`}</p>
                    <p>{job.jobDescription}</p>
                </div>
            ))}
        </div>
        )
}

export default CvField;