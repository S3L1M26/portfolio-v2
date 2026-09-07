import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillsContent from '@/components/SkillsContent';
import ShapeGridBackground from '@/components/ShapeGridBackground';

export default function Projects() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="relative flex flex-col">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ShapeGridBackground />
        </div>

        <Navbar />
        <SkillsContent />
      </div>
      <Footer />
    </main>
  );
} 