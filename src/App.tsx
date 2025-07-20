import { useState } from 'react';
import ResultsCard from './components/results-card';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#F0F2F4]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 py-8">
        <ResultsCard />
      </div>
    </div>
  );
}

export default App;
