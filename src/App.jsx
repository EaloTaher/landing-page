import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
    </>
  );
}
