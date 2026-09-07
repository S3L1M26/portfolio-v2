import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsContent from '@/components/ProjectsContent';
import ShapeGridBackground from '@/components/ShapeGridBackground';

export default function Projects() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="relative flex flex-col">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ShapeGridBackground />
        </div>

        <Navbar />
        <ProjectsContent />
      </div>
      <Footer />
    </main>
  );
} 