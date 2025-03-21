import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { categories } from "@/data";
import styles from "./Category.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Category: React.FC = () => {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowPrev(scrollLeft > 0); // Tampilkan tombol prev jika scrollLeft > 0
      setShowNext(scrollLeft + clientWidth < scrollWidth); // Tampilkan tombol next jika belum mencapai ujung
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Tambahkan event listener untuk scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section id="categories" className={styles.carousel}>
      <div className={styles.pageTitle}>
        <h4>
          Browser Our Category
          <br />
          <span>Receipt</span>
        </h4>
      </div>
      <div className={styles.carouselContainer}>
        {showPrev && (
          <button className={styles.carouselButton} onClick={handlePrev} style={{ left: "20px" }}>
            <FaChevronLeft /> {/* Ikon prev */}
          </button>
        )}
        <div className={styles.carouselItems} ref={carouselRef}>
          {categories.map((item) => (
            <div key={item.id} className={styles.categoryItem} style={{ backgroundColor: item.backgroundColor }}>
              <div className={styles.categoryIcon}>
                <Image src={item.icons} alt={item.name} width={47} height={52} />
              </div>
              <p className={styles.categoryName}>{item.name}</p>
              <span className={styles.categoryStock}>{item.stock} Items</span>
            </div>
          ))}
        </div>
        {showNext && (
          <button className={styles.carouselButton} onClick={handleNext} style={{ right: "20px" }}>
            <FaChevronRight /> {/* Ikon next */}
          </button>
        )}
      </div>
    </section>
  );
};

export default Category;
