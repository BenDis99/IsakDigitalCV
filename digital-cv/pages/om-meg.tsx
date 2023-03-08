import styles from "../styles/About.module.css";
import profilePic from "../public/assets/profile.jpg"
import Image from "next/image";
import CenteredPageContainer from "../components/pageContainers/centeredPageContainer";

const About = () => {

    return (
        <CenteredPageContainer>
            <div className={styles.page}>
                <div className={styles.aboutInfo}>
                    <h1 className={styles.h1 +" "+ styles.font_BebasNeue}>Isak Hølleland</h1>
                    <h2 className={styles.h2 +" "+ styles.font_BebasNeue}>Fullstack Developer</h2>
                    <p className={styles.p +" "+ styles.font_BebasNeue}>The best developer of all</p>
                    <button>Hire me</button>
                </div>
                <Image className={styles.profileImage} src={profilePic} alt="picture of a lovely pal with glasses and a beard"/>
            </div>
        </CenteredPageContainer>
    )
}
export default About;