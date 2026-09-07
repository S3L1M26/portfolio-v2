import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeBackground from '@/components/HomeBackground';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col isolate">
      <div className="relative flex flex-1 flex-col">
        <div className="pointer-events-auto absolute inset-0 z-0 overflow-hidden">
          <HomeBackground />
        </div>

        <div className="relative z-10 flex flex-1 flex-col">
          <Navbar />
          <HomeContent />
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
} 