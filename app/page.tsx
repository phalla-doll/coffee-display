import { Carousel } from "@/components/carousel";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-white relative overflow-hidden flex flex-col">
      {/* Background Decorative Graphics */}
      <div className="absolute top-[-20%] left-[20%] w-[900px] h-[900px] bg-[#E8F1EC] rounded-full -z-10"></div>
      
      {/* Curved background swoosh behind carousel */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] -z-10 overflow-hidden">
        <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full min-w-[1440px] h-full" preserveAspectRatio="none">
          <path fill="#F4F4F0" d="M0,250 C300,350 700,50 1440,250 L1440,400 L0,400 Z"></path>
        </svg>
      </div>

      <div className="flex-1 w-full px-16 relative z-10 flex flex-col pt-16 mx-auto max-w-[1440px]">
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
