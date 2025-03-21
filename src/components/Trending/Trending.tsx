import React, { useState } from "react";
import Image from "next/image";
import { trending } from "@/data";
import styles from "./Trending.module.css";
import CustomButton from "../common/CustomButton/CustomButton";

const Product: React.FC = () => {
  const [showAll, setShowAll] = useState(false); // State untuk menampilkan semua item

  // Tampilkan hanya 4 item pertama jika showAll false
  const displayedItems = showAll ? trending : trending.slice(0, 8);

  return (
    <section id="product" className={styles.product}>
      <div className={styles.pageTitle}>
        <h4>
          Browser Our Trending
          <br />
          <span>Receipt</span>
        </h4>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.productItems}>
          {displayedItems.map((item) => (
            <div key={item.id} className={styles.trendingItem} style={{ backgroundColor: item.backgroundColor }}>
              <div className={styles.trendingIcon}>
                <Image src={item.images} alt={item.name} width={119} height={120} />
              </div>
              <p className={styles.trendingName}>{item.name}</p>
              <span className={styles.trendingCategory}>{item.category}</span>
              <div className={styles.ratingStars}>
                {"★".repeat(item.rate)}
                {"☆".repeat(5 - item.rate)}
              </div>
            </div>
          ))}
        </div>
        {!showAll && trending.length > 8 && <CustomButton title="ALL Receipt" onClick={() => setShowAll(true)} />}
      </div>
    </section>
  );
};

export default Product;
