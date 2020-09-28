import React from "react";
import styles from "./form-elements.module.css";

export const Button = React.memo(({ text }) => (
  <button className={styles.button} type="submit">
    {text}
  </button>
));
