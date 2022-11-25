import { stringify } from "querystring";

const CvField = (props:any) => {
    const {job} = props;
    
    return (<div>
        <h1>{job.jobTitle}, {job.company} | {!!job.timefrom ? job.timefrom : "now"} - {!!job.timeto ? job.timeto : "now"}</h1>
        <h4>{job.jobDescription}</h4>
        </div>)
}

export default CvField;