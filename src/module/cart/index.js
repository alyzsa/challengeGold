import Layout from "../../components/layout";
import HeroSection from "./sections/HeroSection";
import SearchSection from "./sections/SearchSection";

export default function Cart() {
  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <HeroSection />
        <div
          style={{ position: "absolute", top: "365px", left: "0", right: "0" }}
        >
          <SearchSection />
        </div>
      </div>
    </Layout>
  );
}
