import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Balatro from '@/components/Balatro';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col isolate">
      <div className="relative flex flex-1 flex-col">
        <div className="pointer-events-auto absolute inset-0 z-0 overflow-hidden">
          <Balatro
            spinRotation={-2}
            spinSpeed={7}
            color1="#1c1818"
            color2="#858d93"
            color3="#1e2223"
            contrast={3.5}
            lighting={0.4}
            spinAmount={0.25}
            pixelFilter={1450}
          />
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