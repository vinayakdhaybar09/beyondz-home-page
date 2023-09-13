import React from "react";
import styles from "./details.module.css";
import Link from "next/link";

const Details = () => {
  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.detailsContainerTitle}>
        Corporate Training, Consulting & Advisory Services
      </h1>
      <div>
        <p className={styles.detailsContainerInfo}>
          As a group of individuals and a company of experts managing the
          different business divisions that includes corporate training,
          consulting, learning and management courses, we understand that each
          business is unique to its own industry and throws up varying sets of
          challenges.
        </p>
        <p className={styles.detailsContainerInfo}>
          Backed by our corporate and business background, we are quick to
          understand the learning and development needs of our clients and to
          serve clients via three different proven paths-Training, Consulting
          and Coaching.{" "}
          <Link href={"/"}>Training, Consulting and Coaching.</Link>
        </p>
      </div>
      <h1 className={styles.detailsContainerTitle}>
        A Quick Overview of our Services
      </h1>
      <div>
        <p className={styles.detailsContainerInfo}>
          You may be the head of Learning and Development, Human Resources,
          Operations or the CEO of your company looking for procuring corporate
          training and consulting services or to get the services of an
          Executive Coach
        </p>
        <p className={styles.detailsContainerInfo}>
          You could also be an individual beginning your career in the corporate
          world, a graduate engineer trainee, a supervisor, a manager or a
          senior executive; interested in up-skilling
        </p>
        <p className={styles.detailsContainerInfo}>
          As you browse this site, you will get to know the services we offer
          and how we can support you; and what advantages you will get by
          working with Beyond Z Consulting.
        </p>
        <p className={styles.detailsContainerInfo}>
          “Why us” is the section where we clearly define our approach, how it
          can make a difference to you and why you should choose us.
        </p>
        <p className={styles.detailsContainerInfo}>
          While our four divisions is our core strength, we also have partnered
          services wherein we can support you by providing the services our
          partners’ offer. This is detailed in the section “How can Beyond Z
          help you?”
        </p>
        <p className={styles.detailsContainerInfo}>
          Under the Services section we have explained about the various
          interventions via training, coaching and consulting. The training
          modules and the topics covered under each are also stated. However
          these are just a broad indication of the topics we cover and more
          importantly we believe in understanding your needs and customizing
          interventions to meet them.
        </p>
        <p className={styles.detailsContainerInfo}>
          Excellence is our motto – be it Operational Excellence, Personal
          Excellence, Shop floor Excellence or Excellence in Management Systems.
        </p>
        <p className={styles.detailsContainerInfo}>
          From the interventions described you would know that our strength is
          improving operations and the skill sets of people involved by
          providing training, consulting and coaching services in the areas of
          best shop floor practices, continuous improvement philosophies like
          Lean Six Sigma and strengthening Quality and Environmental management
          system. We also understand the soft skills for development of people
          all the way from shop floor operators to senior executives. We are
          just not trainers and coaches, but practitioners with solid industry
          experience. It is our endeavour to support people in industries by
          sharing what we have gathered over the years.
        </p>
        <p className={styles.detailsContainerInfo}>
          With online training becoming so popular post covid, we have come up
          with online training and certification programs. Our Lean Six Sigma
          programs are offered online and we support candidates with TUV and
          other certifications. We are also continuously working on other
          certification programs such as Quality Assurance Engineer
          Certification, Shop Floor Leader Certification and many other programs
          in the pipeline. Do also reach out to us if you have a training need
          and we can customize online programs and deliver online even if it is
          a one off requirement.
        </p>
      </div>
      <Link href={"/"} className={styles.detailsContainerBtn}>
        Enroll to Six Sigma Certification Training &gt; &gt;
      </Link>
    </div>
  );
};

export default Details;
