import React from "react";
import { Field } from "react-final-form";
import styles from "./form-elements.module.css";

export const Input = React.memo(
  ({ label, name, initialValue, type, placeholder }) => (
    <div className={styles.field}>
      <label>{label}</label>
      <Field
        component="input"
        name={name}
        initialValue={initialValue}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
);
