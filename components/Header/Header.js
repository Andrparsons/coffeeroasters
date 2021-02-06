import Link from "next/link";
import { useState } from "react";

import styles from "./Header.module.css";

// import MobileMenu from "../MobileMenu/MobileMenu";
// import Logo from "../ImgComponents/shared/desktop/Logo";
// import Menu from "../ImgComponents/shared/mobile/Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.linkGroup}>
        <Link href="/">
          <a className={styles.logoLink}>{/* <Logo /> */} Logo</a>
        </Link>
        <div className={styles.responsiveLinkGroup}>
          <Link href="/">
            <a className={styles.pageLink}>home</a>
          </Link>
          <Link href="/about">
            <a className={styles.pageLink}>about us</a>
          </Link>
          <Link href="/plan">
            <a className={styles.pageLink}>create your plan</a>
          </Link>
        </div>
      </div>
      <div className={styles.menuWrapper}>
        {/* <Menu className={styles.hamburger} onClick={() => setOpen(!open)} />
            <MobileMenu open={open} setOpen={setOpen} /> */}
      </div>
    </header>
  );
}
