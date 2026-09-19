import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
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
import ArticleDetail from "./pages/ArticleDetail";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

function getRoute() {
  const h = window.location.hash.replace(/^#/, "");
  const path = h.split("?")[0];
  return path || "/";
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

  if (route.startsWith("/journal/")) {
    const slug = route.split("/")[2];
    page = <ArticleDetail slug={slug} />;
  } else {
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
      case "/profile": page = <Profile />; break;
      case "/contact": page = <Contact />; break;
      default: page = <Home />;
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header route={route} />
      {/*
        Spacer compensates for the fixed header so content isn't hidden under it.
        Heights match the real rendered header at each breakpoint:
          mobile  ≈ 36px (announcement) + 52px (nav)           = ~88px  → pt-[88px]
          md+     ≈ 36px (announcement) + 30px (info) + 52px   = ~118px → md:pt-[118px]
        We add a little extra breathing room (+4px) for safety.
      */}
      <div className="h-[92px] md:h-[122px] shrink-0" aria-hidden="true" />
      <main className="flex-1">{page}</main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
