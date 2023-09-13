"use client";

import React, { useState } from "react";
import styles from "./ourTeam.module.css";
import Team1 from "../../../../public/assets/team1.png";
import Image from "next/image";
import { Modal } from "antd";
import { OurTeamData } from "../../../utils/projectData";

const OurTeamCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={styles.ourTeamCard}>
      <div className={styles.ourTeamCardImgDiv}>
        <Image
          src={data.imgLink}
          alt="team profile photo"
          className={styles.ourTeamCardImg}
        />
      </div>
      <p className={styles.ourTeamCardName}>{data.name}</p>
      <p className={styles.ourTeamCardPost}>{data.post}</p>
      <p className={styles.ourTeamCardDesc}>
        {data.description.slice(0, 50)} ...
      </p>
      <button
        className={styles.ourTeamCardBtn}
        onClick={() => setIsModalOpen(true)}
      >
        Read More
      </button>
      <Modal
        footer={false}
        // title="Basic Modal"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className={styles.ourTeamCard}>
          <div className={styles.ourTeamCardImgDiv}>
            <Image
              src={data.imgLink}
              alt="team profile photo"
              className={styles.ourTeamCardImg}
            />
          </div>
          <p className={styles.ourTeamCardName}>{data.name}</p>
          <p className={styles.ourTeamCardPost}>{data.post}</p>
          <p className={styles.ourTeamCardDesc}>{data.description}</p>
        </div>
      </Modal>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className={styles.ourTeamContainer}>
      <h1 className={styles.ourTeamContainerTitle}>Our Team</h1>
      <div className={styles.ourTeamFlexDiv}>
        {OurTeamData.map((data) => {
          return <OurTeamCard data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default OurTeam;
