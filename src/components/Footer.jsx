import React from "react";
import { Route } from "react-router-dom";
import styles from "../assets/styles/footer.module.css";

export const Footer = () => {
  return (

      <div className={styles.footerWrapper}>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h1 className="logo">
                <img src="../src/assets/images/logo-no-background.png" alt="Final Take Logo" className={styles.footerLogo}/>
              </h1>
              <p>
                This product uses the TMDB API but is not endorsed or certified
                by TMDB.
              </p>
              <div>
                <span>
                &#169; 2021 MovieApp. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
