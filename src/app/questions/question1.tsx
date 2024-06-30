import styles from "./question.module.css";

export default function Question1() {
  return (
    <div className={styles.playground}>
      <div className={styles.question}>
        <h1>
          <span>Question 1</span>
          <span>Find the index</span>
        </h1>
        <p>Can you find the array index of the box in the following picture?</p>
        <div className={styles.boxes}>
          <div></div>
          <div></div>
          <div></div>
          <div title='What is the index here?'>?</div>
          <div></div>
        </div>
        <div className={styles.hints}>
          <h2>Hints</h2>
          <ul>
            <li>
              Can you count the number starting from the beginning of the list?
            </li>
            <li>Make sure you start to count using the index 0 first</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
