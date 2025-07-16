import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "./components/ui/button";
import { Slider } from '@/components/ui/slider';

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
];

function App() {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <>
      <div className="bg-blue-500 text-white p-4">
        Tailwind is working!
      </div>
      <div className="mt-4 flex justify-center">
        <Button>shadcn Button</Button>
      </div>
      <div>
          <label className="block mb-2">Slider Value: {sliderValue[0]}</label>
          <Slider
            defaultValue={sliderValue}
            max={100}
            step={1}
            className="w-[300px]"
            onValueChange={(value) => setSliderValue(value)}
          />
        </div>

        <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer> 
    </>
  );
}

export default App;
