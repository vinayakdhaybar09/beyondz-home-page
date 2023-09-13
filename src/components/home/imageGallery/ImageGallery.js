"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import styles from "./imageGallery.module.css";
import hero1 from "../../../../public/assets/hero1.png";

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/assets/hero1.png",
    "/assets/hero2.png",
    "/assets/hero3.png",
    "/assets/hero4.jpg",
    "/assets/hero1.png",
    "/assets/hero2.png",
    "/assets/hero3.png",
    "/assets/hero4.jpg",
    "/assets/hero1.png",
    "/assets/hero2.png",
    "/assets/hero3.png",
    "/assets/hero4.jpg",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className={styles.imageGalleryContainer}>
      <h1 className={styles.imageGalleryContainerTitle}>
        Some of our Workshops and Trainings
      </h1>
      <div className={styles.imageGalleryDiv}>
        {images.map((src, index) => {
          return (
            <div className={styles.galleryImgDiv} key={index}>
              <Image
                onClick={() => openImageViewer(index)}
                className={styles.galleryImg}
                src={src}
                alt="gallery"
                width={200}
                height={300}
              />
            </div>
          );
        })}
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
};

export default ImageGallery;
