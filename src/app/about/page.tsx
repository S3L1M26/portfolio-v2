import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";
import ShapeGridBackground from "@/components/ShapeGridBackground";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative grow flex flex-col">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ShapeGridBackground />
        </div>

        <Navbar />
        <AboutContent />
      </div>
      <Footer />
    </main>
  );
} 