import React, { useEffect } from "react";
import styles from "./Shops.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { productFetch } from "../../store/reducers/shop.reducer";

function Shops() {
  // const dispatch = useDispatch();
  // const store = useSelector((store) => store);
  // const data = store.data.products;
  // useEffect(() => {
  //   dispatch(productFetch());
  // }, [dispatch]);
  // console.log(data);
  return (
    <div className={styles.shop}>
      <div className={styles.container}>
        <div className={styles.shop__blocks}>
          {/* {data.map((item) => {
            return (
              <div
                key={item.id}
                className={`
                  ${styles.shop__item}
                  ${item.id === 7 ? styles.shop__tv : null}
                  ${item.id === 2 ? styles.change__bg : null}                  
                  ${
                    item.id === 2 ? styles.positionRelative : null
                  }                  
                `}
              >
                <div className={styles.item__info}>
                  <div className={styles.image}>
                    <img
                      className={styles.img}
                      src={item.image.url}
                      alt="Audio Speaker"
                    />
                  </div>
                  <div
                    className={`${styles.flex}
                      ${item.id === 7 ? styles.position : null}
                    `}
                  >
                    <h3
                      className={`
                      ${styles.item__title} 
                      ${
                        item.id === 2 || item.id === 7
                          ? styles.change__color
                          : null
                      }
                      ${item.id === 7 ? styles.removeMargin : null}
                    `}
                    >
                      {item.title}
                    </h3>
                    <div className={`${styles.price__info} ${styles.flex}`}>
                      <span className={styles.item__category}>
                        {item.category}
                      </span>
                      <span
                        className={`${styles.item__price} ${styles.change__color}`}
                      >
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })} */}
          <div className={styles.shop__item}>
            <div className={styles.item__info}>
              <div className={styles.image}>
                <img
                  className={styles.img}
                  src="images/audio-speacker.png"
                  alt="Audio Speaker"
                />
              </div>
              <h3 style={{ marginTop: "100px" }} className={styles.item__title}>
                Audio Speaker{" "}
              </h3>
              <div className={styles.price__info}>
                <span className={styles.item__category}>Audio</span>
                <span className={styles.item__price}>$299</span>
              </div>
            </div>
          </div>
          <div className={`${styles.shop__item} ${styles.change__bg}`}>
            <div className={styles.item__info}>
              <div className={styles.image}>
                <img
                  className={styles.img}
                  src="images/Speaker.png"
                  alt="Audio Speaker"
                />
              </div>
              <div className={styles.flex}>
                <h3 className={`${styles.item__title} ${styles.change__color}`}>
                  Headphones
                </h3>
                <div className={`${styles.price__info} ${styles.flex}`}>
                  <span className={styles.item__category}>Audio</span>
                  <span
                    className={`${styles.item__price} ${styles.change__color}`}
                  >
                    $199
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.shop__item}>
            <div className={`${styles.item__info} ${styles.flex__revers}`}>
              <div className={styles.image}>
                <img
                  className={styles.img}
                  src="images/Drum.png"
                  alt="Audio Speaker"
                />
              </div>
              <div className={styles.flex}>
                <h3 className={`${styles.item__title} ${styles.removeMargin}`}>
                  Brownies
                </h3>
                <div className={`${styles.price__info} ${styles.flex}`}>
                  <span className={styles.item__category}>Classic Shoes</span>
                  <span className={styles.item__price}>$599</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.shop__item}>
            <div className={styles.item__info}>
              <div className={styles.image}>
                <img
                  className={styles.img}
                  src="images/Rocket.png"
                  alt="Audio Speaker"
                />
              </div>
              <h3 className={styles.item__title}>Rocket</h3>
              <div className={styles.price__info}>
                <span className={styles.item__category}>Polo T-shirt</span>
                <span className={styles.item__price}>$39</span>
              </div>
            </div>
          </div>
          <div className={styles.shop__item}>
            <div className={styles.item__info} style={{ paddingTop: "55px" }}>
              <div className={styles.image}>
                <img
                  className={styles.img}
                  src="images/Microphone.png"
                  alt="Audio Speaker"
                />
              </div>
              <h3 className={styles.item__title}>Hoodie</h3>
              <div className={styles.price__info}>
                <span className={styles.item__category}>Clothes</span>
                <span className={styles.item__price}>$9</span>
              </div>
            </div>
          </div>
          <div className={styles.shop__item}>
            <div className={styles.item__info}>
              <div className={styles.image}>
                <img
                  className={styles.img}
                  src="images/Bomb.png"
                  alt="Audio Speaker"
                />
              </div>
              <h3 className={styles.item__title}>Retro Eye</h3>
              <div className={styles.price__info}>
                <span className={styles.item__category}>Glasses</span>
                <span className={styles.item__price}>$399</span>
              </div>
            </div>
          </div>
          <div
            className={`${styles.positionRelative} ${styles.shop__tv} ${styles.shop__item}`}
          >
            <img
              className={styles.imgTv}
              src="images/Tv.png"
              alt="Audio Speaker"
            />
            <div className={`${styles.position}`}>
              <h3 className={styles.item__title}>Military Pants</h3>
              <div className={styles.price__info}>
                <span className={styles.item__category}>Pants</span>
                <span className={styles.item__price}>$199</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shops;
