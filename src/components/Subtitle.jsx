import { insertStyles } from "@emotion/utils"
import styles from "./css/Subtitle.module.css"

export default function Subtitle(){
    return(
        <div className={styles.subt}>
            <h2>
                This is a moving animation.
            </h2>
        </div>
    )
}