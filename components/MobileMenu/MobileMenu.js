import Link from "next/link";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={styles.mobileMenu}
      style={
        open
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
    >
      <div className={styles.mobileLinks}>
        <Link href="/">
          <a className={styles.mobileLink} onClick={() => setOpen(!open)}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className={styles.mobileLink} onClick={() => setOpen(!open)}>
            About Us
          </a>
        </Link>
        <Link href="/plan">
          <a className={styles.mobileLink} onClick={() => setOpen(!open)}>
            Create Your Plan
          </a>
        </Link>
      </div>
    </div>
  );
}
