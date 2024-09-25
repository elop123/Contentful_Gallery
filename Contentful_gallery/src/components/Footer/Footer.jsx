import styles from './Footer.module.scss'

export const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>
            Crafted by <strong>Elena</strong>&<strong>Loveleen</strong>&<strong>Makka</strong> to highlight the newest 2024 Motorcycle models.
          </p>
          <p>
            <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  };