import React, { useState } from 'react';
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
      <div className="flex flex-col gap-4 md:gap-4 pt-8 md:pt-16 items-center text-center">
        <h1 className="font-extrabold text-gray-900 text-[1rem] md:text-[2rem] leading-tight">Your Sales Team’s Time, Reclaimed</h1>
        <div className="font-medium text-gray-700 text-[1.125rem] md:text-[2rem] leading-snug">See how much more your team could sell with less admin work</div>
      </div>
      {/* Main content with responsive gap */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 p-4 md:p-8" style={{ marginTop: '40px', marginBottom: '0', gap: '40px' }}>
        {/* Desktop: increase gap to 72px */}
        <style>{`@media (min-width: 768px) {.main-content-gap { gap: 72px !important; margin-top: 72px !important; }}`}</style>
        <div className="main-content-gap w-full lg:w-[35%] flex justify-center items-stretch hidden lg:flex">
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
              <div className="p-4">
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
        <div className="main-content-gap w-full lg:w-[65%] flex justify-center items-start">
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

