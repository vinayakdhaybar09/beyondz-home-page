"use client";

import React, { useState } from "react";
import styles from "./ourTeam.module.css";
import Team1 from "../../../../public/assets/team1.png";
import Image from "next/image";
import { Modal } from "antd";

const OurTeamData = [
  {
    id: 1,
    imgLink: Team1,
    name: "Pradeep Kumar",
    post: "CHIEF EXECUTIVE",
    description:
      "Pradeep Kumar has about three decades of professional experience against his name.  With multi-location and multi-cultural exposure paired with a Master Black Belt in Six Sigma & Lean, Pradeep’s core expertise comes from over a decade of specialization in a large multinational manufacturing company. He is a Certified MBB in Lean and Six Sigma by SBTI, Texas and trained by Mckinsey Consultants as a Lean Practitioner in Rock Hill-USA. He currently works with large multinational companies, helping them drive Operational Excellence and implement lean strategies. Pradeep also guides senior leadership towards excellence in execution. He has trained candidates in Lean & Six Sigma in India, China, Japan, Thailand, Europe, Middle East, Sri Lanka and the USA",
  },
  {
    id: 2,
    imgLink: Team1,
    name: "Pradeep Kumar",
    post: "CHIEF EXECUTIVE",
    description:
      "Pradeep Kumar has about three decades of professional experience against his name.  With multi-location and multi-cultural exposure paired with a Master Black Belt in Six Sigma & Lean, Pradeep’s core expertise comes from over a decade of specialization in a large multinational manufacturing company. He is a Certified MBB in Lean and Six Sigma by SBTI, Texas and trained by Mckinsey Consultants as a Lean Practitioner in Rock Hill-USA. He currently works with large multinational companies, helping them drive Operational Excellence and implement lean strategies. Pradeep also guides senior leadership towards excellence in execution. He has trained candidates in Lean & Six Sigma in India, China, Japan, Thailand, Europe, Middle East, Sri Lanka and the USA",
  },
  {
    id: 3,
    imgLink: Team1,
    name: "Pradeep Kumar",
    post: "CHIEF EXECUTIVE",
    description:
      "Pradeep Kumar has about three decades of professional experience against his name.  With multi-location and multi-cultural exposure paired with a Master Black Belt in Six Sigma & Lean, Pradeep’s core expertise comes from over a decade of specialization in a large multinational manufacturing company. He is a Certified MBB in Lean and Six Sigma by SBTI, Texas and trained by Mckinsey Consultants as a Lean Practitioner in Rock Hill-USA. He currently works with large multinational companies, helping them drive Operational Excellence and implement lean strategies. Pradeep also guides senior leadership towards excellence in execution. He has trained candidates in Lean & Six Sigma in India, China, Japan, Thailand, Europe, Middle East, Sri Lanka and the USA",
  },
  {
    id: 4,
    imgLink: Team1,
    name: "Pradeep Kumar",
    post: "CHIEF EXECUTIVE",
    description:
      "Pradeep Kumar has about three decades of professional experience against his name.  With multi-location and multi-cultural exposure paired with a Master Black Belt in Six Sigma & Lean, Pradeep’s core expertise comes from over a decade of specialization in a large multinational manufacturing company. He is a Certified MBB in Lean and Six Sigma by SBTI, Texas and trained by Mckinsey Consultants as a Lean Practitioner in Rock Hill-USA. He currently works with large multinational companies, helping them drive Operational Excellence and implement lean strategies. Pradeep also guides senior leadership towards excellence in execution. He has trained candidates in Lean & Six Sigma in India, China, Japan, Thailand, Europe, Middle East, Sri Lanka and the USA",
  },
  {
    id: 5,
    imgLink: Team1,
    name: "Pradeep Kumar",
    post: "CHIEF EXECUTIVE",
    description:
      "Pradeep Kumar has about three decades of professional experience against his name.  With multi-location and multi-cultural exposure paired with a Master Black Belt in Six Sigma & Lean, Pradeep’s core expertise comes from over a decade of specialization in a large multinational manufacturing company. He is a Certified MBB in Lean and Six Sigma by SBTI, Texas and trained by Mckinsey Consultants as a Lean Practitioner in Rock Hill-USA. He currently works with large multinational companies, helping them drive Operational Excellence and implement lean strategies. Pradeep also guides senior leadership towards excellence in execution. He has trained candidates in Lean & Six Sigma in India, China, Japan, Thailand, Europe, Middle East, Sri Lanka and the USA",
  },
  {
    id: 6,
    imgLink: Team1,
    name: "Pradeep Kumar",
    post: "CHIEF EXECUTIVE",
    description:
      "Pradeep Kumar has about three decades of professional experience against his name.  With multi-location and multi-cultural exposure paired with a Master Black Belt in Six Sigma & Lean, Pradeep’s core expertise comes from over a decade of specialization in a large multinational manufacturing company. He is a Certified MBB in Lean and Six Sigma by SBTI, Texas and trained by Mckinsey Consultants as a Lean Practitioner in Rock Hill-USA. He currently works with large multinational companies, helping them drive Operational Excellence and implement lean strategies. Pradeep also guides senior leadership towards excellence in execution. He has trained candidates in Lean & Six Sigma in India, China, Japan, Thailand, Europe, Middle East, Sri Lanka and the USA",
  },
  {
    id: 7,
    imgLink: Team1,
    name: "Pradeep Kumar",
    post: "CHIEF EXECUTIVE",
    description:
      "Pradeep Kumar has about three decades of professional experience against his name.  With multi-location and multi-cultural exposure paired with a Master Black Belt in Six Sigma & Lean, Pradeep’s core expertise comes from over a decade of specialization in a large multinational manufacturing company. He is a Certified MBB in Lean and Six Sigma by SBTI, Texas and trained by Mckinsey Consultants as a Lean Practitioner in Rock Hill-USA. He currently works with large multinational companies, helping them drive Operational Excellence and implement lean strategies. Pradeep also guides senior leadership towards excellence in execution. He has trained candidates in Lean & Six Sigma in India, China, Japan, Thailand, Europe, Middle East, Sri Lanka and the USA",
  },
];

const OurTeamCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={styles.ourTeamCard}>
      <Image
        src={data.imgLink}
        alt="team profile photo"
        className={styles.ourTeamCardImg}
      />
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
          <Image
            src={data.imgLink}
            alt="team profile photo"
            className={styles.ourTeamCardImg}
          />
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
