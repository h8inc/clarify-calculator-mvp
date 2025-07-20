import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';

const chartData = [
  { name: 'Clarify', Selling: 80, Admin: 20 },
  { name: 'Other', Selling: 55, Admin: 45 },
];

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

const ResultsCard: React.FC<{ fromHours: number; toHours: number }> = ({ fromHours, toHours }) => (
  <section className="bg-card rounded-2xl border border-gray-100 md:p-6 p-4 w-full flex flex-col gap-8 shadow-sm" aria-label="Results summary: hours selling vs admin">
    {/* Savings Description */}
    <div className="flex flex-col gap-2 text-center" aria-label="savings-description">
      <span className="text-[1.25rem] md:text-[1.25rem] font-medium text-gray-900 leading-snug">
        Less clicking, more closing —{' '}
        <span className="text-[1.25rem] md:text-[1.25rem] font-semibold underline decoration-[#22FFC0] decoration-[3px] underline-offset-[6px]">
          increase selling time from {fromHours}h to {toHours}h with Clarify.
        </span>
      </span>
    </div>
    {/* Savings Row */}
    <div className="flex flex-row justify-between items-center px-4 md:px-10 gap-6" aria-label="savings-row">
      <div className="flex flex-col items-center">
        <span className="text-[1.25rem] md:text-[1.25rem] font-bold text-gray-700">40.0 hours</span>
        <span className="text-[0.875rem] text-gray-600">Weekly time saved</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[1.25rem] md:text-[1.25rem] font-bold text-gray-700">$75,000</span>
        <span className="text-[0.875rem] text-gray-600">Weekly cost savings</span>
      </div>
    </div>
    {/* Chart */}
    <div className="flex flex-col gap-8 w-full" aria-label="results-chart">
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
          <Bar
            dataKey="Selling"
            stackId="a"
            fill={COLORS.sellingHex}
            radius={[16, 0, 0, 16]}
            isAnimationActive={false}
            barSize={48}
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
            isAnimationActive={false}
            barSize={48}
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
  </section>
);

export default ResultsCard; 