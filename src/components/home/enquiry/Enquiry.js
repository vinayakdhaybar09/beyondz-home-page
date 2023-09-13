import React from "react";
import enquiryImg from "../../../../public/assets/enquiry.png";
import Image from "next/image";
import styles from "./enquiry.module.css";

const Enquiry = () => {
  return (
    <div className={styles.enquiryContainer}>
      <div className={styles.enquiryImgDiv}>
        <Image
          src={enquiryImg}
          alt="enquiry"
          className={styles.enquiryContainerImg}
        />
      </div>
      <div className={styles.enquiryFormDiv}>
        <p className={styles.enquiryFormTitle}>Quick Enquiry</p>
        <form>
          <p className={styles.enquiryFormLabel}>
            Name <span>*</span>
          </p>
          <input
            type="text"
            placeholder="Name"
            className={styles.enquiryFormInput}
          />
          <p className={styles.enquiryFormLabel}>
            Email <span>*</span>
          </p>
          <input
            type="email"
            placeholder="Email"
            className={styles.enquiryFormInput}
          />
          <p className={styles.enquiryFormLabel}>
            Message <span>*</span>
          </p>
          <textarea placeholder="Message" className={styles.enquiryFormInput} />
          <button className={styles.enquirySendBtn}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
