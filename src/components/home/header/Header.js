"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import styles from "./header.module.css";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Popover } from "antd";

const serviceContent = (
  <div className={styles.popoverDiv}>
    <Link href={"/"} className={styles.popoverSubMenu}>
      Training
    </Link>
    <Link href={"/"} className={styles.popoverSubMenu}>
      Consulting
    </Link>
    <Link href={"/"} className={styles.popoverSubMenu}>
      Coaching
    </Link>
  </div>
);

const learningContent = (
  <div className={styles.popoverDiv}>
    <Link href={"/"} className={styles.popoverSubMenu}>
      Case Studies
    </Link>
    <Link href={"/"} className={styles.popoverSubMenu}>
      Modules
    </Link>
    <Link href={"/"} className={styles.popoverSubMenu}>
      Definitions
    </Link>
  </div>
);

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (submenu) => {
    if (openSubMenu === submenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoImgDiv}>
          <img
            className={styles.logoImg}
            src="https://beyondzconsulting.com/wp-content/uploads/cropped-Beyond-Z-logo-270x69.png"
            alt=""
          />
        </div>
        <div className={styles.rightHeaderSec}>
          <div className={styles.headerLinks}>
            <Link href="/" className={styles.linkTag}>
              Home
            </Link>
            <Link href="/" className={styles.linkTag}>
              About
            </Link>
            <Popover placement="bottom" content={serviceContent}>
              <Link href="/" className={styles.linkTag}>
                Services
                <BiChevronDown />
              </Link>
            </Popover>
            <Popover placement="bottom" content={learningContent}>
              <Link href="/" className={styles.linkTag}>
                Learning Centre
                <BiChevronDown />
              </Link>
            </Popover>
            <Link href="/" className={styles.linkTag}>
              Blog
            </Link>
            <Link href="/" className={styles.linkTag}>
              Contact
            </Link>
          </div>
          <div className={styles.mediaDiv}>
            <Link href="/" className={styles.mediaTag}>
              <FaFacebookSquare />
            </Link>
            <Link href="/" className={styles.mediaTag}>
              <FaInstagramSquare />
            </Link>
            <Link href="/" className={styles.mediaTag}>
              <FaLinkedin />
            </Link>
            <Link href="/" className={styles.mediaTag}>
              <FaTwitterSquare />
            </Link>
          </div>
        </div>
        <div className={styles.menuBtnDiv}>
          {isActive ? (
            <RxCross2
              className={styles.menuBtn}
              onClick={() => setIsActive(!isActive)}
            />
          ) : (
            <HiMenu
              className={styles.menuBtn}
              onClick={() => setIsActive(!isActive)}
            />
          )}
        </div>
      </div>
      {isActive ? (
        <div className={styles.mobileMenuContainer}>
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              Home
            </Link>
          </div>
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              About
            </Link>
          </div>
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              Services
            </Link>
            <BiChevronDown onClick={() => handleSubMenuClick("Services")} />
          </div>
          {openSubMenu === "Services" ? (
            <div className={styles.subMenuContainer}>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Training
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Consulting
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Coaching
                </Link>
              </div>
            </div>
          ) : null}
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              Learning Center
            </Link>
            <BiChevronDown onClick={() => handleSubMenuClick("Learning")} />
          </div>
          {openSubMenu === "Learning" ? (
            <div className={styles.subMenuContainer}>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Case Studies
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Modules
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Definitions
                </Link>
              </div>
            </div>
          ) : null}
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              Blog
            </Link>
          </div>
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
