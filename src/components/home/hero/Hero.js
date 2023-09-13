import { Carousel } from "antd";
import React from "react";
import styles from "./hero.module.css";
import Link from "next/link";
import { HeroCarouselData } from "../../../utils/projectData";
import hero1 from "../../../../public/assets/hero1.png";
import hero2 from "../../../../public/assets/hero2.png";
import hero3 from "../../../../public/assets/hero3.png";
import hero4 from "../../../../public/assets/hero4.jpg";

const Hero = () => {
  const bgImgStyle = {
    backgroundImage: `url(${hero3.src})`, // Use the imported image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className={styles.heroCarouselContainer}>
      <Carousel autoplay>
        {HeroCarouselData.map((data) => {
          return (
            <div key={data.id}>
              <div
                className={styles.carouselDiv}
                style={{
                  backgroundImage: `url(${data.imageLink.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className={styles.carouselInfoDiv}>
                  <div className={styles.carouselTitleDiv}>
                    <h1 className={styles.carouselTitle}>{data.title}</h1>
                    <p className={styles.carouselSubTitle}>{data.subTitle}</p>
                  </div>
                  <div className={styles.carouselHeroBtnDiv}>
                    <Link href={"/"} className={styles.carouselServiceBtn}>
                      Our Services
                    </Link>
                    <Link href={"/"} className={styles.carouselContactBtn}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
