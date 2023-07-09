import Layout from "../../components/layout";

import HeroSection from "./sections/HeroSection";
import GirlSection from "./sections/GirlSection";
import WhyUs from "./sections/WhyUs";
import Testimoni from "./sections/Testimoni";
import Banner from "./sections/Banner";
import FAQ from "./sections/FAQ";
import Footer from "./sections/footer";

export default function Hero() {
  return (
    <Layout>
      <HeroSection />
      <div style={{ marginTop: "100px" }} />
      <GirlSection />
      <div style={{ marginTop: "70px" }} />
      <WhyUs />
      <div style={{ marginTop: "70px" }} />
      <Testimoni />
      <div style={{ marginTop: "70px" }} />
      <Banner />
      <div style={{ marginTop: "100px" }} />
      <FAQ />
      <div style={{ marginTop: "100px" }} />
      <Footer />
    </Layout>
  );
}
