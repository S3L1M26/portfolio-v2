import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsContent from '@/components/ProjectsContent';

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative flex-grow flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
        </div>

        <Navbar />
        <ProjectsContent />
      </div>
      <Footer />
    </main>
  );
} 