import React from "react";

import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="https://www.facebook.com/alexvieirask/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="Facebook Icon" />
        </a>
        <a
          href="https://twitter.com/alexvieirask"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Twitter Icon" />
        </a>
        <a
          href="https://www.instagram.com/alexvieirask  "
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="Instagram Icon" />
        </a>
      </div>
      <p>Desenvolvido por Alura/Alex</p>
    </footer>
  );
}