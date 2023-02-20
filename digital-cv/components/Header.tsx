import Link from "next/link";
import styles from "../styles/Header.module.css"
import logo from "../public/favicon.ico"
import Image from "next/image";

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.subpage_link +" "+ styles.logo_link} href="/">
                <Image className={styles.logo_image} src={logo} alt="logo"></Image>
                    Min CV
                </Link>
                <Link className={styles.subpage_link} href="/utdanning">Utdanning</Link>
                <Link className={styles.subpage_link} href="/karriere">Karriere</Link>
                <Link className={styles.subpage_link} href="/om-meg">Om me</Link>
            </nav>
        </header>
    )
} 
export default Header;