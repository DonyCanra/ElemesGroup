// components/StickyNav.tsx
import React from "react";
import styles from "./StickyNav.module.css";
import { FaHome, FaInfoCircle, FaTag, FaBlog, FaEnvelope } from "react-icons/fa"; // Import ikon

const StickyNav: React.FC = () => {
  return (
    <div className={styles["sticky-nav"]}>
      <nav>
        <a href="#home">
          <FaHome size={20} /> {/* Ikon Home */}
        </a>
        <a href="#categories">
          <FaInfoCircle size={20} /> {/* Ikon About */}
        </a>
        <a href="#product">
          <FaTag size={20} /> {/* Ikon Promotions */}
        </a>
        <a href="#about-us">
          <FaBlog size={20} /> {/* Ikon Blogs */}
        </a>
        <a href="#about-us">
          <FaEnvelope size={20} /> {/* Ikon Contact Us */}
        </a>
      </nav>
    </div>
  );
};

export default StickyNav;