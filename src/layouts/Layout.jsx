import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          {" "}
          <a href="https://www.linkedin.com/in/ali-sadrsharif-525586348/" target='_blank'>
            Ali Sadrsharif
          </a>{" "}
          | My React App
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Ali Sadrsharif</p>
      </footer>
    </>
  );
}

export default Layout;
