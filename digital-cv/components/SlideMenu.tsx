import styles from "../styles/Header.module.css"
import Navigation from "./Navigation";


type Props = {open:boolean, close:()=>void}
const SlideMenu = (props : Props)=>{
    const {open, close} = props;
    if(!open){ return <></>}
    return(
        <Navigation className={styles.nav_mobile}/>
    );
}
export default SlideMenu;