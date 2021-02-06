import styles from "./Footer.module.css";
import Link from "next/link";

// svg imgs
import { Logo } from "../SvgComponents/shared/desktop";
import {
  IconFacebook,
  IconTwitter,
  IconInstagram,
} from "../SvgComponents/shared/desktop";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.flexFooter}>
        <Link href="/">
          <a>
            <Logo
              className={styles.footerLogo}
              width="auto"
              height="auto"
              viewBox="0 0 237 27"
            />
          </a>
        </Link>
        <div className={styles.footerLinks}>
          <Link href="/">
            <a className={styles.footerLink}>home</a>
          </Link>
          <Link href="/about">
            <a className={styles.footerLink}>about</a>
          </Link>
          <Link href="/plan">
            <a className={styles.footerLink}>create your plan</a>
          </Link>
        </div>
        <div className={styles.footerIcons}>
          <a className={styles.iconLink} href="https://www.facebook.com">
            <IconFacebook />
          </a>
          <a className={styles.iconLink} href="https://www.twitter.com">
            <IconTwitter />
          </a>
          <a className={styles.iconLink} href="https://www.instagram.com">
            <IconInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
