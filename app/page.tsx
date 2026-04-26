// app/page.tsx
import Hero from "./components/sections/Hero";
import Retail from "./components/sections/Retail";
import Luxury from "./components/sections/Luxury";
import Dining from "./components/sections/Dining";
import Entertainment from "./components/sections/Entertainment";
// import Events from "./components/sections/Events";
import CTA from "./components/sections/CTA";
import Why from "./components/sections/Why";
import Navbar from "./components/Navbar";
import SidebarNav from "./components/SidebarNav";
import ScrollProgress from "./components/ScrollProgress";
import Opportunities from "./components/sections/Opportunities";
import EventsPlatform from "./components/sections/Events";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <SidebarNav />
      <ScrollProgress />
      <Hero />
      <Why />
      <Retail />
      <Luxury />
      <Dining />
      {/* <Entertainment /> */}
      <EventsPlatform />
      <Opportunities />
      <CTA />
    </>
  );
}