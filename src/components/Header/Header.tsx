import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import CustomButton from "../common/CustomButton";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image src="/assets/logo.png" width={207} height={50} alt="Logo" />
        </div>
        {/* Menu */}
        <nav className={styles.menu}>
          <a href="#home">Home</a>
          <a href="#categories">About</a>
          <a href="#product">Promotions</a>
          <a href="#about-us">Blogs</a>
          <a href="#about-us">Contact Us</a>
        </nav>
        {/* Tombol Auth */}
        <nav className={styles.authButtons}>
          <a href="#" className={styles.loginBtn}>
            Masuk
          </a>
          <CustomButton title="Daftar Sekarang" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
