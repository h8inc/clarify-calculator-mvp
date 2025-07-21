import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList, Tooltip } from 'recharts';

const COLORS = {
  sellingHex: '#BEE8FD',
  adminHex: '#F3DEFA',
};

const CustomLabel = ({ x, y, width, value, align, fontWeight }: any) => (
  <text
    x={align === 'left' ? x + 16 : x + width - 16}
    y={y + 24}
    textAnchor={align === 'left' ? 'start' : 'end'}
    fill="#374151"
    fontFamily="Manrope"
    fontWeight={fontWeight}
    fontSize="16"
    alignmentBaseline="middle"
  >
    {value}%
  </text>
);

const CustomYAxisTick = ({ x, y, payload }: any) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={4} textAnchor="end" fill="#6B7280" fontFamily="Manrope" fontSize="14" alignmentBaseline="middle">
      {payload.value}
    </text>
  </g>
);

// Custom tooltip for desktop
const CustomTooltip = ({ active, payload, label, chartHours }: any) => {
  if (active && payload && payload.length) {
    const bar = chartHours.find((row: any) => row.name === label);
    return (
      <div className="rounded-lg bg-white border border-gray-200 px-4 py-2 shadow text-sm text-gray-600">
        <div className="font-semibold text-gray-900 mb-1">{label}</div>
        <div>Selling: <span className="font-bold">{bar.Selling} hours</span></div>
        <div>Admin: <span className="font-bold">{bar.Admin} hours</span></div>
      </div>
    );
  }
  return null;
};

interface ResultsChartProps {
  chartData: Array<{ name: string; Selling: number; Admin: number }>;
  chartHours: Array<{ name: string; Selling: number; Admin: number }>;
  ariaMessage: string;
}

const ResultsChart: React.FC<ResultsChartProps> = ({ chartData, chartHours, ariaMessage }) => (
  <div className="flex flex-col gap-8 w-full" aria-label="results-chart">
    {/* ARIA live region for accessibility */}
    <div aria-live="polite" className="sr-only">{ariaMessage}</div>
    <ResponsiveContainer width="100%" height={160}>
      <BarChart
        data={chartData}
        layout="vertical"
        barCategoryGap={32}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis
          dataKey="name"
          type="category"
          axisLine={false}
          tickLine={false}
          width={55}
          tick={<CustomYAxisTick />}
        />
        <Tooltip
          content={(props) => <CustomTooltip {...props} chartHours={chartHours} />}
          wrapperClassName="hidden md:block"
        />
        <Bar
          dataKey="Selling"
          stackId="a"
          fill={COLORS.sellingHex}
          radius={[16, 0, 0, 16]}
          isAnimationActive={true}
          animationDuration={400}
          barSize={48}
          style={{ pointerEvents: 'none' }} // Prevents all hover/focus highlight and disables tooltip
          activeBar={false}
        >
          <LabelList
            dataKey="Selling"
            content={(props) => <CustomLabel {...props} align="left" fontWeight={600} />}
          />
        </Bar>
        <Bar
          dataKey="Admin"
          stackId="a"
          fill={COLORS.adminHex}
          radius={[0, 16, 16, 0]}
          isAnimationActive={true}
          animationDuration={400}
          barSize={48}
          style={{ pointerEvents: 'none' }} // Prevents all hover/focus highlight and disables tooltip
          activeBar={false}
        >
          <LabelList
            dataKey="Admin"
            content={(props) => <CustomLabel {...props} align="right" fontWeight={700} />}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    {/* Legend */}
    <div className="flex flex-row items-center justify-center gap-6" aria-label="chart-legend">
      <div className="flex items-center gap-2">
        <span
          className="inline-block w-4 h-4 rounded-full"
          style={{ background: '#72CEFC', opacity: 0.45 }}
          aria-hidden="true"
        ></span>
        <span className="text-[0.875rem] text-gray-700">Selling</span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className="inline-block w-4 h-4 rounded-full"
          style={{ background: '#F3DEFA', opacity: 0.6 }}
          aria-hidden="true"
        ></span>
        <span className="text-[0.875rem] text-gray-700">Admin</span>
      </div>
    </div>
  </div>
);

export default ResultsChart; 