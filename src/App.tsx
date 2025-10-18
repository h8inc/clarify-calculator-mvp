import { useState } from 'react';
import ResultsCard from './components/results-card';
import SlidersPanel from './components/SlidersPanel';
import { Sheet, SheetTrigger, SheetContent } from './components/ui/sheet';
import { Button } from './components/ui/button';

function App() {
  // Lift slider state to App
  const [headcount, setHeadcount] = useState(5);
  const [adminTime, setAdminTime] = useState(20);
  const [avgPay, setAvgPay] = useState(75000);

  return (
    <div className="h-screen w-full bg-[#F0F2F4]">
      {/* Headline and subheadline */}
      <div className="flex flex-col gap-4 md:gap-6 pt-8 md:pt-16 items-center text-center">
        <h1 className="font-extrabold text-gray-900 text-[1rem] md:text-[2rem] leading-tight">Your Sales Team's Time, Reclaimed</h1>
        <div className="font-medium text-gray-700 text-[1.125rem] md:text-[2rem] leading-snug">See how much more your team could sell with less admin work</div>
        {/* CTA Buttons */}
        <div className="flex flex-row gap-3 items-center justify-center">
          <a 
            href="https://www.clarify.io/get-started" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-black bg-[#3ED4AE] hover:bg-[#35C09D] transition-all shadow-sm"
          >
            Get started
          </a>
          <a 
            href="https://www.clarify.io/demo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-black bg-transparent shadow-[inset_0_0_0_2px_black] hover:bg-black hover:text-white transition-all"
          >
            Book a demo
          </a>
        </div>
      </div>
      {/* Main content with responsive gap */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 p-4 md:p-8 relative" style={{ marginBottom: '0', gap: '40px' }}>
        {/* Gradient background behind calculator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 hidden lg:block">
          <svg width="1307" height="760" viewBox="0 0 1307 760" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" filter="url(#filter0_f_44_8780)">
              <rect width="1147" height="707" rx="353.5" transform="matrix(-1 0 0 1 1227 80)" fill="url(#paint0_linear_44_8780)" fillOpacity="0.25"/>
            </g>
            <defs>
              <filter id="filter0_f_44_8780" x="0" y="0" width="1307" height="867" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_44_8780"/>
              </filter>
              <linearGradient id="paint0_linear_44_8780" x1="-6.28149" y1="353.5" x2="1139.46" y2="353.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3ED4AE"/>
                <stop offset="0.234375" stopColor="#3A72EF"/>
                <stop offset="0.489583" stopColor="#8F57EF"/>
                <stop offset="0.739583" stopColor="#FF6644"/>
                <stop offset="1" stopColor="#EBFF70"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Desktop: increase gap to 72px */}
        <style>{`@media (min-width: 768px) {.main-content-gap { gap: 72px !important; margin-top: 72px !important; }}`}</style>
        <div className="main-content-gap w-full lg:w-[35%] flex justify-center items-stretch hidden lg:flex relative z-10">
          <SlidersPanel
            headcount={headcount}
            setHeadcount={setHeadcount}
            adminTime={adminTime}
            setAdminTime={setAdminTime}
            avgPay={avgPay}
            setAvgPay={setAvgPay}
          />
        </div>
        {/* Mobile: Sticky bottom sheet trigger */}
        <div className="main-content-gap fixed bottom-0 left-0 right-0 z-50 flex justify-center lg:hidden p-4 pointer-events-none">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-full max-w-md pointer-events-auto shadow-lg font-semibold text-base py-4 rounded-xl">Adjust Inputs</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="p-0 rounded-t-2xl border-none pb-[env(safe-area-inset-bottom)] !max-h-[90vh] !overflow-y-auto items-start">
              <div className="p-4 w-full">
                <SlidersPanel
                  headcount={headcount}
                  setHeadcount={setHeadcount}
                  adminTime={adminTime}
                  setAdminTime={setAdminTime}
                  avgPay={avgPay}
                  setAvgPay={setAvgPay}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Results card always visible */}
        <div className="main-content-gap w-full lg:w-[65%] flex justify-center items-start relative z-10">
          <ResultsCard
            headcount={headcount}
            adminTime={adminTime}
            avgPay={avgPay}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

