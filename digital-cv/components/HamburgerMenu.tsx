import HamburgerIcon from "./icon/HamburgerIcon";
import styles from "../styles/HamburgerMenu.module.css";
import { useState } from "react";
import SlideMenu from "./SlideMenu";

const HamburgerMenu = (props: any) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <>
            <button className={styles.hamburgerButton} onClick={()=>setMenuIsOpen(!menuIsOpen)}>
                <HamburgerIcon />
            </button>
            <SlideMenu open={menuIsOpen} close={()=>setMenuIsOpen(false)} />
        </>
    )
}

export default HamburgerMenu;