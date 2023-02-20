import styles from "../styles/Header.module.css"

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="/">Logo</a>
                <a href="/education">Education</a>
                <a href="/career">Career</a>
                <a href="/about-me">About me</a>
            </nav>
        </header>
    )
} 
export default Header;