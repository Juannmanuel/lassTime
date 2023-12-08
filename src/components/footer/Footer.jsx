// Footer.jsx

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerText}`}>
        <small>&copy; 2023 Juan Manuel.</small>
      </div>
      <div className={`${styles.footerText}`}>
        <p>
          <span className={`${styles.fontSemibold}`}>Acerca de este sitio web:</span>{" "}
          construido con React y Vite,
          JavaScript, CSS module, alojado en Vercel.
        </p>
      </div>
      <div className={`${styles.footerText}`}>
        <p>
          Este sitio es ficticio sin ningún fin de lucro, solamente educativo.
          Contacta conmigo si quieres que cree tu página para tu e-commerce.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
