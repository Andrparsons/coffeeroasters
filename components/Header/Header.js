import Link from "next/link";
import { useState } from "react";

import styles from "./Header.module.css";

// import MobileMenu from "../MobileMenu/MobileMenu";
import { Logo } from "../SvgComponents/shared/desktop";
import { IconHamburger } from "../SvgComponents/shared/mobile";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.linkGroup}>
        <Link href="/">
          <a className={styles.logoLink}>
            <Logo width="auto" height="auto" viewBox="0 0 237 27" />
          </a>
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
        <IconHamburger onClick={() => setOpen(!open)} />
        {/* <MobileMenu open={open} setOpen={setOpen} /> */}
      </div>
    </header>
  );
}
