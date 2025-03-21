import React from "react";
import Image from "next/image";
import CustomButton from "@/components/common/CustomButton/CustomButton";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => (
  <section id="home" className={styles.hero}>
    <div className={styles.heroBackground}>
      <Image src="/assets/Background2.png" layout="fill" objectFit="cover" alt="Background" />
    </div>
    <div className={styles.heroText}>
      <h1>
        Good Food Us
        <br />
        Good Mood
      </h1>
      <div className={styles.heroImageMobile}>
        <Image src="/assets/Home.png" height={651} width={664} alt="Hero" />
      </div>
      <p>
        I would think that conserving our natural resources
        <br />
        should be a conservative position: Not to waste food, and
        <br />
        not to throw away a lot of the food that we buy.
      </p>
      <div className={styles.heroAction}>
        <CustomButton title="Daftar Sekarang" />
        <CustomButton title="About Us" backgroundColor="#F2F2F2" color="#333333" />
      </div>
    </div>
    <div className={styles.heroImage}>
      <Image src="/assets/Home.png" height={651} width={664} alt="Hero" />
    </div>
  </section>
);

export default HeroSection;
