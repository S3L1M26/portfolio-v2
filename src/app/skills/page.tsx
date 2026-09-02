import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillsContent from '@/components/SkillsContent';

export default function Projects() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="relative flex flex-col">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[28px_48px] -z-10"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-300 w-300 rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
        </div>

        <Navbar />
        <SkillsContent />
      </div>
      <Footer />
    </main>
  );
} 