import React from "react";
import styles from "./Shops.module.sass";

function Shops() {
  return (
    <div className={styles.shop}>
      <div className={styles.container}>
        <div className={styles.shop__blocks}>
          <div className={styles.shop__item}>
            <div className={styles.image}>
              <img
                className={styles.img}
                src="images/audio-speacker.png"
                alt="Audio Speaker"
              />
            </div>
            <div className={styles.item__info}>
              <h3 className={styles.item__title}>Audio Speaker </h3>
              <span className={styles.item__category}>Audio</span>
              <span className={styles.item__price}>$299</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shops;
