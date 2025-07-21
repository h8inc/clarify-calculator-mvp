import ResultsCard from './components/results-card';
import SlidersPanel from './components/SlidersPanel';
import { Sheet, SheetTrigger, SheetContent } from './components/ui/sheet';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="h-screen w-full bg-[#F0F2F4]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 p-4 md:p-8">
        {/* Desktop/Tablet: Side panel, hidden on mobile */}
        <div className="w-full lg:w-[35%] flex justify-center items-stretch hidden lg:flex">
          <SlidersPanel />
        </div>
        {/* Mobile: Sticky bottom sheet trigger */}
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center lg:hidden p-4 pointer-events-none">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-full max-w-md pointer-events-auto shadow-lg font-semibold text-base py-4 rounded-xl">Adjust Inputs</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="p-0 rounded-t-2xl border-none pb-[env(safe-area-inset-bottom)] !max-h-[90vh] !overflow-y-auto items-start">
              <div className="p-4">
                <SlidersPanel />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Results card always visible */}
        <div className="w-full lg:w-[65%] flex justify-center items-start">
          <ResultsCard />
        </div>
      </div>
    </div>
  );
}

export default App;

