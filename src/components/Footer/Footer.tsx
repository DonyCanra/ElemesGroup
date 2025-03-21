import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer id="about-us" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerRow}>
          <div className={styles.footerColumn}>
            <Image className={styles.footerLogo} src="/assets/logo.png" width={207} height={50} alt="Logo" />
            <p className={styles.footerText}>
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
              <br />
              Kecamatan Setiabudi, Kota Jakarta Selatan,
              <br />
              Daerah Khusus Ibukota Jakarta 12950
            </p>
            <div className={styles.footerIcons}>
              <div className={styles.footerIcon}>
                <Image src="/assets/Icons/email.svg" width={20} height={20} alt="Email" />
              </div>
              <div className={styles.footerIcon}>
                <Image src="/assets/Icons/hp.svg" width={20} height={20} alt="Phone" />
              </div>
              <div className={styles.footerIcon}>
                <Image src="/assets/Icons/instagram.svg" width={20} height={20} alt="Instagram" />
              </div>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <h4>Category</h4>
            <ul>
              <li>Cupcake</li>
              <li>Pizza</li>
              <li>Kebab</li>
              <li>Salmon</li>
              <li>Dougnut</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>About Us</h4>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Report Problem</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Newsletter</h4>
            <p className={styles.footerText}>Get now free 50% discount for all products on your first order</p>
            <div className={styles.footerInputContainer}>
              <input type="email" placeholder="Your email address" className={styles.footerInput} />
              <button className={styles.footerInputButton}>
                <span>Send</span>
              </button>
            </div>
            <p className={styles.footerText}>
              <Image className={styles.footerIconText} src="/assets/Icons/email.svg" width={20} height={20} alt="Email" />
              elemesid@gmail.com
            </p>
            <p className={styles.footerText}>
              <Image className={styles.footerIconText} src="/assets/Icons/hp.svg" width={20} height={20} alt="Phone" />
              0888 1111 2222
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.footerCopyright}>&copy; {new Date().getFullYear()} Elemes ID. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
