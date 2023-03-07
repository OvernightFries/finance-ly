import styles from './css/Topbody.module.css'

export default function Topbody() {
    return(
        <div className={styles.body}>

            <h1>
                What is Finance.ly?
            </h1>

            <p>
                Finance.ly is an AIO service that provides consumers financial advice 
                based on user input and GPT-3 machine learning APIs.
            </p>

        </div>
    )

}
