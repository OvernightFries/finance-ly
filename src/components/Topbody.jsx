import styles from "./css/Topbody.module.css";

export default function Topbody() {
  return (
    <div className={styles.body}>
      <h1>What is Finance.ly?</h1>

      <p>
        Finance.ly is an AIO service that provides consumers financial advice
        based on user input and GPT-3 machine learning APIs.
      </p>

      <img
        src="https://media.cntraveler.com/photos/63483e15ef943eff59de603a/5:4/w_2500,h_2000,c_limit/New%20York%20City_GettyImages-1347979016.jpg"
        alt="Filler, NYC"
      />
    </div>
  );
}
