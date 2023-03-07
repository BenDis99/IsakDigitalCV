import styles from "../styles/Header.module.css"
import HamburgerMenu from "./HamburgerMenu";
import Navigation from "./Navigation";

const Header = () => {

    return (
        <header className={styles.header}>
            <Navigation className={styles.nav}/>
            <HamburgerMenu />
        </header>
    )
} 
export default Header;