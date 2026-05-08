import { Navbar } from "@/components/navbar";
import { Carousel } from "@/components/carousel";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-white relative overflow-hidden flex flex-col">
      {/* Background Decorative Graphic (Light Mint Circle) */}
      <div className="absolute top-[-20%] right-[10%] w-[800px] h-[800px] bg-[var(--color-starbucks-light)] rounded-full -z-10 blur-3xl opacity-60"></div>
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--color-starbucks-light)] rounded-full -z-10 mix-blend-multiply"></div>

      <Navbar />

      <div className="flex-1 w-full px-16 relative z-10 flex flex-col pt-4 mx-auto max-w-[1440px]">
        {/* Header Section */}
        <div className="w-full flex justify-end pr-8 relative z-20">
          <div className="max-w-[700px] text-right">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-[var(--color-starbucks-green)] leading-[0.85] tracking-tight mb-6">
              The happiest hour<br/>of the year
            </h1>
            <p className="text-xl text-gray-500 font-medium tracking-wide">
              Available now at the counter.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="flex-1 flex max-h-[700px] w-full justify-center items-end mt-[-20px] pb-4 z-10">
           <Carousel />
        </div>
      </div>
    </main>
  );
}
