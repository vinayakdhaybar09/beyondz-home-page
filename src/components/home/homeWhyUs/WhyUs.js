import React from "react";
import styles from "./whyus.module.css";

const WhyUs = () => {
  return (
    <div className={styles.whyUsConatainer}>
      <h1 className={styles.whyUsTitle}>Why us ?</h1>
      <div className={styles.whyUsDiv}>
        <div className={styles.whyUsImgDiv}>
          <img
            className={styles.whyUsImg}
            src="https://beyondzconsulting.com/wp-content/uploads/whyus-768x512-1.png"
            alt="why us"
          />
        </div>
        <div className={styles.whyUsInfoDiv}>
          <p>
            Our approach to improving your business is researched and realistic
            –
            <span> no blind application of textbook tools and techniques.</span>
          </p>
          <p>
            In our quest to provide you with precise solutions to boost overall
            or specific productivity, we
            <span>characteristically create leaders</span> who approach problems
            with the ability and drive to solve them. Our teams are specialized
            and
            <span>
              rather than creating a dependency on consultants, we increase
              capabilities by mentoring
            </span>
            you towards internalizing and imbibing improvement philosophies as
            you go about realizing greater successes.
          </p>
          <p>
            More importantly <span>we help make the change you desire.</span> When you choose
            us, it’s a brand new start, it’s a whole new page – your needs,
            challenges and aspirations become our priorities
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
