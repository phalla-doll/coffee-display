import { Navbar } from "@/components/navbar";
import { Carousel } from "@/components/carousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-200 flex items-center justify-center p-4 md:p-12 overflow-hidden">
      {/* Outer App Frame (representing the digital counter display screen) */}
      <div className="w-full max-w-[1440px] h-[900px] bg-white rounded-3xl shadow-2xl relative overflow-hidden flex flex-col">
        
        {/* Background Decorative Graphic (Light Mint Circle) */}
        <div className="absolute top-[-20%] right-[10%] w-[800px] h-[800px] bg-[var(--color-starbucks-light)] rounded-full -z-10 blur-3xl opacity-60"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--color-starbucks-light)] rounded-full -z-10 mix-blend-multiply"></div>

        <Navbar />

        <div className="flex-1 w-full px-12 relative z-10 flex flex-col items-end pt-10">
          <div className="max-w-2xl text-right mr-12 relative z-20">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-starbucks-green)] leading-[0.9] tracking-tight">
              The happiest hour<br/>of the year
            </h1>
            <p className="mt-6 text-sm text-gray-500 max-w-md ml-auto">
              Sign up to get exclusive access to deals on drinks this holiday season.
            </p>
            <a href="#" className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-400 hover:text-[var(--color-starbucks-green)] hover:border-[var(--color-starbucks-green)] transition-colors pb-1">
              Send me magic
            </a>
          </div>

          <div className="absolute left-0 bottom-10 w-full flex justify-center pb-12 z-10">
             <Carousel />
          </div>
        </div>

      </div>
    </main>
  );
}
