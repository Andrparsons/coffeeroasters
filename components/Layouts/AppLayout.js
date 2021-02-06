import styles from "./AppLayout.module.css";

// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.appBackground}>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export const getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default AppLayout;
