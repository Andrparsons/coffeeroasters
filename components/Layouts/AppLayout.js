import styles from "./AppLayout.module.css";

import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.appBackground}>
      <div className={styles.container}>
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export const getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default AppLayout;
