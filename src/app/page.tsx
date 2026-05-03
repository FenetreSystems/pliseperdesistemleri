import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BrandValue from "@/components/BrandValue";
import Process from "@/components/Process";
import Applications from "@/components/Applications";
import TrustProofs from "@/components/TrustProofs";
import ServiceRegions from "@/components/ServiceRegions";
import MaterialQuality from "@/components/MaterialQuality";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <BrandValue />
        <Process />
        <Applications />
        <TrustProofs />
        <ServiceRegions />
        <MaterialQuality />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
