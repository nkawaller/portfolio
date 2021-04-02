import Nav from "./Nav";
import Meta from "./Meta";
import Body from "./Body";
import styles from "../styles/Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Body />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
