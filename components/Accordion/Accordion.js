import styles from "./Accordion.module.css";
import { IconArrow } from "../SvgComponents/plan";

import React, { useState, useRef } from "react";

export default function Accordion(props) {
  const [active, setActive] = useState("");
  const [height, setheight] = useState("0px");
  const [rotate, setRotate] = useState("");
  const content = useRef(null);

  function toggle() {
    setActive(active === "" ? "active" : "");
    setheight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotate(active === "active" ? "" : "rotate");
  }

  return (
    <div className={styles.accordion} id={props.id}>
      <button
        className={`${styles.accordionButton} ${styles[active]}`}
        onClick={toggle}
        disabled={props.disabled}
      >
        <div className={styles.buttonTitle}>{props.title}</div>
        <IconArrow className={`${styles.icon} ${styles[rotate]}`} />
      </button>
      <div
        ref={content}
        className={styles.accordionContent}
        style={{ maxHeight: `${height}` }}
      >
        {props.children}
      </div>
    </div>
  );
}
