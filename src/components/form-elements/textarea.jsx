import React from "react";
import { Field } from "react-final-form";
import styles from "./form-elements.module.css";

export const Textarea = React.memo(
  ({ label, name, initialValue, placeholder }) => (
    <div className={styles.field}>
      <label>{label}</label>
      <Field
        component="textarea"
        name={name}
        initialValue={initialValue}
        placeholder={placeholder}
        rows="4"
      />
    </div>
  )
);
