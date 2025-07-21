import React from 'react';
import SavingsDescription from './SavingsDescription';
import SavingsRow from './SavingsRow';
import ResultsChart from './ResultsChart';

const chartData = [
  { name: 'Clarify', Selling: 80, Admin: 20 },
  { name: 'Other', Selling: 55, Admin: 45 },
];

const ResultsCard: React.FC = () => (
  <section className="bg-card rounded-2xl border border-gray-100 md:p-6 p-4 w-full flex flex-col gap-8 shadow-sm" aria-label="Results summary: hours selling vs admin">
    <SavingsDescription fromHours={40} toHours={64} />
    <SavingsRow kpi1="40.0 hours" kpi2="$75,000" />
    <ResultsChart chartData={chartData} />
  </section>
);

export default ResultsCard; 