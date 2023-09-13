import React from "react";
import styles from "./partners.module.css";
import partner1 from "../../../../public/assets/partner1.png";
import partner2 from "../../../../public/assets/partner2.png";
import partner3 from "../../../../public/assets/partner3.png";
import partner4 from "../../../../public/assets/partner4.png";
import partner5 from "../../../../public/assets/partner5.png";
import partner6 from "../../../../public/assets/partner6.png";
import partner7 from "../../../../public/assets/partner7.png";
import partner8 from "../../../../public/assets/partner8.png";
import partner9 from "../../../../public/assets/partner9.png";
import partner10 from "../../../../public/assets/partner10.png";
import partner11 from "../../../../public/assets/partner11.png";
import partner12 from "../../../../public/assets/partner12.png";
import Image from "next/image";

const partnersImgArr = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
];

const Partners = () => {
  return (
    <div className={styles.partnersContainer}>
      <h1 className={styles.partnersContainerTitle}>We&#39;ve worked with</h1>
      <div className={styles.partnersContainerImgDiv}>
        {partnersImgArr.map((imgData, index) => {
          return (
            <div className={styles.partnersContainerImgBox} key={index}>
              <Image
                key={index}
                className={styles.partnersContainerImg}
                src={imgData}
                alt="partners"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
