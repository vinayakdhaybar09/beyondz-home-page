"use client";

import { Carousel } from "antd";
import React from "react";
import styles from "./testimonials.module.css";
import { TestimonialsData } from "../../../utils/projectData";

const Testimonials = () => {
  // const onChange = (currentSlide) => {
  //   // console.log(currentSlide);
  // };

  const CarouselTestimonials = TestimonialsData.slice(0, 10);

  return (
    <div className={styles.testimonialContainer}>
      <h1 className={styles.testimonialContainerTitle}>
        What our Client&#39;s say about us !
      </h1>
      <div className={styles.testimonialCarousal}>
        <Carousel autoplay>
          {CarouselTestimonials.map((data) => {
            return (
              <div key={data.id}>
                <div className={styles.testimonialDiv} key={data.id}>
                  <p className={styles.TestimonialsInfo}>{data.testimonial}</p>
                  <p className={styles.TestimonialsName}>{data.name}</p>
                  <p className={styles.TestimonialsPost}>{data.post}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
