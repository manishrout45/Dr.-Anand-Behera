import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

export default function App() {
  const location = useLocation();

  /*
  ============================================================
  HASH SCROLL
  ============================================================

  Handles:

  /#anatomy
  /#procedures
  /#about
  /#services
  /#contact

  This also works when coming from:

  /services/lumbar-spine-surgery
  */

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    if (!location.hash) {
      return;
    }

    const sectionId =
      location.hash.substring(1);

    let attempts = 0;
    const maxAttempts = 30;

    const scrollToSection = () => {
      const element =
        document.getElementById(sectionId);

      if (!element) {
        return false;
      }

      const navbarHeight = 92;

      const elementTop =
        element.getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });

      return true;
    };

    /*
      Wait for Home.jsx and its sections
      to finish rendering.
    */

    const interval = setInterval(() => {
      attempts++;

      const found = scrollToSection();

      if (found || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-ink text-bone">

      <Navbar />

      <Routes>

        {/* ==================================================
            HOME PAGE
        ================================================== */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ==================================================
            SERVICE DETAILS PAGE
        ================================================== */}

        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

      </Routes>

      <Footer />

    </div>
  );
}