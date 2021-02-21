import styles from "./RadioInput.module.css";

import React from "react";

export default function RadioInput(props) {
  return (
    <label className={styles.radioLabel} htmlFor={props.id}>
      <input
        className={styles.radioKnob}
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.changed}
      />
      <div className={styles.radioContent}>{props.children}</div>
    </label>
  );
}
