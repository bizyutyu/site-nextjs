import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "bizyutyu";
export const siteTitle = "Blog by ${name}";


function Layout({children}) {
  return (
  <div className={styles.container}>
    <Head>
        <link rel= "icon" href= "/favicon.ico" />
    </Head>
    <header className={styles.header}>
        <img src="/images/profile.png" className={utilStyles.borderCircle}/>
        <h1 className={utilStyles.heading1}>{name}</h1>   
    </header>
    <main>{children}</main>
  </div>
  );
}

export default Layout;