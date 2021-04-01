import Head from "next/head";
import styles from "../styles/Layout.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nathan Kawaller Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
