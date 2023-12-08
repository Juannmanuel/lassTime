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
          <span className={`${styles.fontSemibold}`}>Este rincón digital:</span>{" "}
          construido con pasión y líneas de código danzantes. React y Vite se mezclan,
          mientras JavaScript y CSS forman una melodía tecnológica,
          todo alojado en Vercel, la utopía de los proyectos web.
        </p>
      </div>
      <div className={`${styles.footerText}`}>
        <p>
          ¡Importante! Este sitio es como una utopía digital 🌐: ficticio, pero lleno de posibilidades.
          ¿Quieres hacer realidad tus proyectos? ¡Contacta conmigo y llevemos tu visión a nuevas alturas!
        </p>
      </div>
      <div className={`${styles.footerText}`}>
        <p>
          ¿Listo para la próxima aventura digital? ¡Visita mi{' '}
          <a href="https://juan-manuel.vercel.app" target="_blank" rel="noopener noreferrer" className={`${styles.link}`}>
            portfolio
          </a>
          {' '}y descubre más!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
