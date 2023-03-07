import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css"
import logo from "../public/favicon.ico"

type Props = {className:string}
const Navigation = (props : Props) => {
    const {className} = props;
    return (
    <nav className={className}>
        <Link className={styles.subpage_link +" "+ styles.logo_link} href="/">
        <Image className={styles.logo_image} src={logo} alt="logo"></Image>
            Min CV
        </Link>
        <Link className={styles.subpage_link} href="/utdanning">Utdanning</Link>
        <Link className={styles.subpage_link} href="/karriere">Karriere</Link>
        <Link className={styles.subpage_link} href="/om-meg">Om meg</Link>
    </nav>
    )

}
export default Navigation;