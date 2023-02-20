import styles from "../styles/Footer.module.css";

const Footer = () => {
    
    return (
    <footer className={styles.footer}>
        <dl>
            <dt>@Author</dt>
            <dd>Isak Hølleland</dd>
        </dl>
    </footer>
    );
}
export default Footer;