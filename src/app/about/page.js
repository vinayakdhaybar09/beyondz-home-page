import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import aboutImg from "../../../public/assets/aboutImg.jpg";
import aboutProjectImg from "../../../public/assets/aboutProjectImg.jpg";

import Link from "next/link";

const page = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutImgDiv}>
        <Image src={aboutImg} alt="about" className={styles.aboutImg} />
      </div>
      <h1 className={styles.aboutTitle}>About Us</h1>
      <p className={styles.aboutInfo}>
        Beyond Z is a{" "}
        <Link href={"/"}>management consulting firm and learning center</Link>
        that partners with clients to help drive excellence through consulting,
        training or coaching interventions. Excellence is our motto- be it
        Operational Excellence, Personal Excellence, Shop floor Excellence or
        Excellence in Management Systems.
      </p>
      <p className={styles.aboutInfo}>
        If everything from A to Z is done to improve a process, change culture,
        solve a problem or enhance profits, we like to push just a wee bit more
        to arrive at the stages of ‘Beyond Z’. This is where greater successes,
        greater efficiencies and bigger breakthroughs wait to be experienced.
      </p>
      <p className={styles.aboutInfo}>
        As a group of individuals and a company of experts, we understand that
        each business is unique to its own industry and throws up varying sets
        of challenges. This is exactly why we work closely with our clients;
        study all possible situations and conditions to then come up with simple
        and effective solutions that decrease costs and increase profits.
      </p>
      <p className={styles.aboutInfo}>
        We are of the firm opinion that just knowledge to solve a certain
        problem isn’t as sufficient as also knowing when and how to apply the
        same. We help our clients define strategically important goals and
        metrics, build capabilities of personnel and mentor team members towards
        sustainable improvements.
      </p>

      <h3>Typical Projects</h3>
      <p className={styles.aboutInfo}>
        Get a fair idea on the typical
        <Link href={"/"}>Lean Six Sigma projects</Link> we can assist you with.
      </p>
      <div className={styles.aboutProjectImgDiv}>
        <Image src={aboutProjectImg} alt="about" className={styles.aboutProjetImg} />
      </div>
    </div>
  );
};

export default page;
