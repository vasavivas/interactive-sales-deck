"use client";
import Hero from "./components/sections/Hero";
import Retail from "./components/sections/Retail";
import Luxury from "./components/sections/Luxury";
import Dining from "./components/sections/Dining";
// import Entertainment from "./components/sections/Entertainment";
import CTA from "./components/sections/CTA";
import Why from "./components/sections/Why";
// import Navbar from "./components/Navbar";
import SidebarNav from "./components/SidebarNav";
import ScrollProgress from "./components/ScrollProgress";
import Opportunities from "./components/sections/Opportunities";
import EventsPlatform from "./components/sections/Events";
import KeyboardNavigation from "./components/KeyboardNavigation";
import EventsIntro from "./components/sections/EventsIntro";
import EventsVideo from "./components/sections/EventsVideo";
import EventsPlatformsList from "./components/sections/EventsPlatformsList";
import NavigationArrows from "./components/NavigationArrows";
import IntroOverlay from "./components/IntroOverlay";
import StartScreen from "./components/StartScreen";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<"start" | "intro" | "deck">("start");
  const [isStarted, setIsStarted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  if (!isStarted) {
    return <StartScreen onStart={() => setIsStarted(true)} />;
  }

  // 1. Start Screen
  if (currentStep === "start") {
    return <StartScreen onStart={() => setCurrentStep("intro")} />;
  }

  // 2. Intro Video Screen
  if (currentStep === "intro") {
    return <IntroOverlay onComplete={() => setCurrentStep("deck")} />;
  }
  return (
    <main className="deck-container" id="deck-container">
      <SidebarNav />
      <NavigationArrows />
      <KeyboardNavigation />
      <ScrollProgress />

      <section id="hero" className="slide-section h-full w-full">
        <Hero />
      </section>
      <section id="why" className="slide-section h-full w-full">
        <Why />
      </section>

      <section id="retail" className="slide-section h-full w-full">
        <Retail />
      </section>

      <section id="luxury" className="slide-section h-full w-full">
        <Luxury />
      </section>

      <section id="dining" className="slide-section h-full w-full">
        <Dining />
      </section>

      {/* <section id="entertainment" className="slide-section h-full w-full">
        <Entertainment />
      </section> */}

      <section id="events-intro" className="slide-section h-full w-full">
        <EventsIntro />
      </section>

      <section id="events-video" className="slide-section h-full w-full">
        <EventsVideo />
      </section>

      <section id="events-platforms" className="slide-section h-full w-full">
        <EventsPlatformsList />
      </section>

      <section id="opportunities" className="slide-section h-full w-full">
        <Opportunities />
      </section>

      <section id="cta" className="slide-section h-full w-full">
        <CTA />
      </section>
    </main>
  );
}