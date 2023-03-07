import styles from "../styles/About.module.css";
import profilePic from "../public/assets/profile.jpg"
import Image from "next/image";

const About = () => {

    return (
        <div className={styles.page}>
            <div className={styles.aboutInfo}>
                <h1 className={styles.h1 +" "+ styles.font_BebasNeue}>Isak Hølleland</h1>
                <h2 className={styles.h2 +" "+ styles.font_BebasNeue}>Fullstack Developer</h2>
                <p>The best developer of all</p>
                <button>Hire me</button>
            </div>
            
            <Image className={styles.profileImage} src={profilePic} alt="picture of a lovely pal with glasses and a beard"/>
        </div>
    )
}
export default About;