import React from "react";
import styles from "./ideology.module.css";
import Image from "next/image";
import partnerImg from "../../../../public/assets/partner.png";
import Link from "next/link";

const Ideology = () => {
  return (
    <div className={styles.ideologyContainer}>
      <h1 className={styles.ideologyContainerTitle}>Our Core Ideology</h1>
      <div className={styles.ideologyFlexDiv}>
        <div className={styles.ideologyCard}>
          <p className={styles.ideologyCardTitle}>Vision</p>
          <p className={styles.ideologyCardDesc}>
            To be leaders in taking our clients beyond current levels of
            effectiveness and efficiency
          </p>
        </div>
        <div className={styles.ideologyCard}>
          <p className={styles.ideologyCardTitle}>Values</p>
          <p className={styles.ideologyCardDesc}>
            Fun, Innovation, Accountability and Excellence
          </p>
        </div>
        <div className={styles.ideologyCard}>
          <p className={styles.ideologyCardTitle}>Purpose</p>
          <p className={styles.ideologyCardDesc}>
            To help our clients be successful and profitable by simple, accurate
            and scientific solutions
          </p>
        </div>
      </div>

      <h1 className={styles.ideologyContainerTitle}>Solution Partner</h1>
      <div className={styles.partnerFlexDiv}>
        <div className={styles.partnerImgDiv}>
          <p className={styles.partnerTitle}>SigmaXL Inc</p>
          <Image src={partnerImg} alt="partner" className={styles.partnerImg} />
        </div>
        <div className={styles.partnerInfoDiv}>
          <p className={styles.partnerInfo}>
            Established in 1998, SigmaXL Inc. is a leading provider of user
            friendly Excel Add-ins for Lean Six Sigma graphical and statistical
            tools and Monte Carlo simulation. SigmaXL® customers include market
            leaders like Agilent, Diebold, FedEx, Microsoft, Motorola and Shell.
            SigmaXL® software is also used by numerous colleges, universities
            and government agencies.
          </p>
          <p className={styles.partnerInfo}>
            SigmaXL was designed from the ground up to be a cost-effective,
            powerful, but easy to use tool that enables users to measure,
            analyze, improve and control their service, transactional, and
            manufacturing processes. As an add-in to the already familiar
            Microsoft Excel, SigmaXL® is ideal for Lean Six Sigma training and
            application, or use in a college statistics course.
          </p>
          <p className={styles.partnerInfo}>
            Website: <Link href={"/"}>www.sigmaxl.com</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ideology;
