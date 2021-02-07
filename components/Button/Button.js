import styles from "./Button.module.css";

import React from "react";

const Button = React.forwardRef(
  ({ children, btnStyle = "primary", action, href }, ref) => {
    let classStyle = styles[btnStyle];
    return (
      <button className={classStyle} onClick={action} href={href} ref={ref}>
        {children}
      </button>
    );
  }
);

export default Button;
