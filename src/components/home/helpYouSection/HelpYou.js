import React from "react";
import styles from "./helpYou.module.css";
import Link from "next/link";
import HelpImg from "../../../../public/assets/helpImg.png";
import Image from "next/image";

const HelpYou = () => {
  return (
    <div className={styles.helpYouContainer}>
      <h1 className={styles.helpYouTitle}>How can Beyond Z help you?</h1>
      <div className={styles.helpYouFlex}>
        <div className={styles.helpYouInfo}>
          <p>
            Our Business comprises of Four Divisions – Consulting, Coaching,
            Training and Management Systems.
          </p>
          <p>
            We also offer services with support from our Partner Companies –
            <Link href="/">
              Business Strategy, Engineering and Project Management.
            </Link>
          </p>
          <p>
            To help you more, we are backed with Industry Niche Subject Matter
            Experts and Master Class Session Facilitaors.
          </p>
        </div>
        <div className={styles.helpYouImgDiv}>
          <Image src={HelpImg} alt="" className={styles.helpYouImg} />
        </div>
      </div>
      <div className={styles.helpYouBtnDiv}>
        <Link href={"/"} className={styles.helpYouBtn}>
          Four Divisions
        </Link>
        <Link href={"/"} className={styles.helpYouBtn}>
          Partnered Services
        </Link>
        <Link href={"/"} className={styles.helpYouBtn}>
          Expert Panel
        </Link>
      </div>
    </div>
  );
};

export default HelpYou;
