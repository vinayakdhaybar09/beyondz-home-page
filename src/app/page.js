import HelpYou from "@/components/home/helpYouSection/HelpYou";
import styles from "./page.module.css";
import WhyUs from "@/components/home/homeWhyUs/WhyUs";
import OurTeam from "@/components/home/ourTeam/OurTeam";
import Ideology from "@/components/home/ideology/Ideology";
import Partners from "@/components/home/partners/Partners";
import Enquiry from "@/components/home/enquiry/Enquiry";
import Footer from "@/components/home/footer/Footer";
import Details from "@/components/home/details/Details";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Hero from "@/components/home/hero/Hero";
import ImageGallery from "@/components/home/imageGallery/ImageGallery";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Details />
      <WhyUs />
      <HelpYou />
      <OurTeam />
      <Ideology />
      <ImageGallery />
      <Partners />
      <Testimonials />
      <Enquiry />
    </main>
  );
}
