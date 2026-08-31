import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Booking from "./pages/Booking";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Bridal from "./pages/Bridal";
import Membership from "./pages/Membership";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";

function getRoute() {
  const h = window.location.hash.replace(/^#/, "");
  return h || "/";
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  let page: React.ReactNode;
  switch (route) {
    case "/about": page = <About />; break;
    case "/services": page = <Services />; break;
    case "/service": page = <ServiceDetail />; break;
    case "/booking": page = <Booking />; break;
    case "/team": page = <Team />; break;
    case "/gallery": page = <Gallery />; break;
    case "/bridal": page = <Bridal />; break;
    case "/membership": page = <Membership />; break;
    case "/journal": page = <Journal />; break;
    case "/contact": page = <Contact />; break;
    default: page = <Home />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header route={route} />
      <main className="flex-1">{page}</main>
      <Footer />
    </div>
  );
}
