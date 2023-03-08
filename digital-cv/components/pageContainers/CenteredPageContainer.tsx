import styles from "../../styles/PageContainer.module.css";
import Image, { StaticImageData } from "next/image";

type Props = {background? : StaticImageData, blur?:boolean, children: any}
const CenteredPageContainer = (props : Props) => {
    const {background, blur=false, children} = props;
    return (
        <div className={styles.page_container}>
            {blur && (
                <div className={styles.blur_bg} />
            )}
            {background && (
                <div className={styles.background} >
                    <Image 
                        className={styles.image}
                        src={background} 
                        alt="backround image"
                    />
                </div>
                
            )}
            <div className={styles.page_content}>
                {children}
            </div>
        </div>
    )

}

export default CenteredPageContainer;