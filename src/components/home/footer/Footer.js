import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInfoDiv}>
        <p className={styles.footerTitle}>Contact us to know more :</p>
        <p className={styles.footerInfo}>
          <span>Address:</span> 102, Gagan Raksha, #14 Athmananda Colony Main
          Road, R T Nagar Post, Bangalore – 560032, INDIA
        </p>
        <p className={styles.footerInfo}>
          <span>Phone Number:</span> +91 98 45181067, +91 80 23657041
        </p>
        <p className={styles.footerInfo}>
          <span>Email :</span> info@beyondzconsulting.com
        </p>
      </div>
      <div className={styles.footerLinksDiv}>
        <p className={styles.footerTitle}>Useful Links</p>
        <Link href={"/"} className={styles.footerLinks}>
          Corporate Brochure
        </Link>
        <Link href={"/"} className={styles.footerLinks}>
          Lean Six Sigma Green Belt Training
        </Link>
        <Link href={"/"} className={styles.footerLinks}>
          Minitab Training
        </Link>
        <Link href={"/"} className={styles.footerLinks}>
          Driving Shop Floor Excellence
        </Link>
        <Link href={"/"} className={styles.footerLinks}>
          Driving Personal Excellence
        </Link>
        <Link href={"/"} className={styles.footerLinks}>
          Privacy Policy
        </Link>
        <Link href={"/"} className={styles.footerLinks}>
          Terms and Conditions
        </Link>
        <div className={styles.footerMediaDiv}>
          <Link
            href={"https://www.facebook.com/beyondzconsulting"}
            className={styles.footerMediaFacebook}
          >
            <FaFacebook className={styles.footerMedia} />
          </Link>
          <Link
            href={"https://twitter.com/etpkmenon"}
            className={styles.footerMediaTwitter}
          >
            <FaTwitter className={styles.footerMedia} />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/company/beyond-z-consulting-llp?trk=nav_account_sub_nav_company_admin"
            }
            className={styles.footerMediaLinkedin}
          >
            <FaLinkedinIn className={styles.footerMedia} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
