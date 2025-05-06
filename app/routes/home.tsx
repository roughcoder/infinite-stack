import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import { Mission } from "../components/Mission";
import { Features } from "../components/Features";
import { Bento } from "../components/Bento";
import { Notification } from "../components/Notifications";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
export function meta({ data }: Route.MetaArgs) {
  return [
    { title: "Infinite Stack | Modern Tech Consulting & AI Solutions" },
    { name: "description", content: "Infinite Stack helps businesses solve real problems with AI, full-stack systems, and modern tech. Smart, fast delivery from a small, expert team." },
  ];
}

export default function Home() {
  return (
    <>
    <NavBar />
      <Hero />
      <div>
        <Mission />
        <Features />
        <Bento />
      </div>
      <Footer />
    </>
  );
}
