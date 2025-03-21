// src/components/common/CustomButton/CustomButton.tsx
import React from "react";
import styles from "./CustomButton.module.css";
import { CustomButtonProps } from "@/types";

const CustomButton: React.FC<CustomButtonProps> = ({ title, color = "#ffffff", backgroundColor = "#8bac3e", onClick }) => {
  return (
    <button
      className={styles["signup-btn"]}
      style={{
        backgroundColor,
        color,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
