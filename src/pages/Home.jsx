import Hero from "../components/Hero.jsx";
import ScrollSpineSection from "../components/ScrollSpineSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Procedures from "../components/Procedures.jsx";
import ContactSection from "../components/ContactSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import HealthInformation from "../components/HealthInformation.jsx";
import FAQSection from "../components/FAQSection.jsx";

export default function Home() {
  return (
    <main>
      <Hero />

      <div id="anatomy">
        <ScrollSpineSection />
      </div>

      <AboutSection />
      <Procedures />
      <ServicesSection />
      <ContactSection />
      <FAQSection />
      <HealthInformation />
    </main>
  );
}