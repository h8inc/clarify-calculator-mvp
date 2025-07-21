import React from 'react';
import SavingsDescription from './SavingsDescription';
import SavingsRow from './SavingsRow';
import ResultsChart from './ResultsChart';

interface ResultsCardProps {
  headcount: number;
  adminTime: number;
  avgPay: number;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ headcount, adminTime, avgPay }) => {
  // --- Realistic savings calculation ---
  // Admin and selling hours without Clarify
  const adminWithoutClarify = adminTime * headcount;
  const sellingWithoutClarify = (40 - adminTime) * headcount;
  // Clarify efficiency factor (80% admin reduction)
  const efficiencyFactor = 0.8;
  const adminWithClarify = adminWithoutClarify * (1 - efficiencyFactor);
  const sellingWithClarify = sellingWithoutClarify + (adminWithoutClarify - adminWithClarify);
  // Time saved
  const timeSaved = adminWithoutClarify - adminWithClarify;
  // Hourly rate from annual salary
  const hourlyRate = avgPay / (40 * 52);
  // Weekly cost savings
  const weeklyCostWithoutClarify = adminWithoutClarify * hourlyRate;
  const weeklyCostWithClarify = adminWithClarify * hourlyRate;
  const weeklyCostSavings = Math.round(weeklyCostWithoutClarify - weeklyCostWithClarify);

  // Chart data for Recharts (percentages)
  const totalHours = headcount * 40;
  const otherAdminPct = Math.round((adminWithoutClarify / totalHours) * 100);
  const otherSellingPct = Math.round((sellingWithoutClarify / totalHours) * 100);
  const clarifyAdminPct = Math.round((adminWithClarify / totalHours) * 100);
  const clarifySellingPct = Math.round((sellingWithClarify / totalHours) * 100);
  const chartData = [
    { name: 'Clarify', Selling: clarifySellingPct, Admin: clarifyAdminPct },
    { name: 'Other', Selling: otherSellingPct, Admin: otherAdminPct },
  ];
  const chartHours = [
    { name: 'Clarify', Selling: Math.round(sellingWithClarify), Admin: Math.round(adminWithClarify) },
    { name: 'Other', Selling: Math.round(sellingWithoutClarify), Admin: Math.round(adminWithoutClarify) },
  ];
  const ariaMessage = `Chart updated: Clarify admin ${Math.round(adminWithClarify)} hours, selling ${Math.round(sellingWithClarify)} hours. Other admin ${Math.round(adminWithoutClarify)} hours, selling ${Math.round(sellingWithoutClarify)} hours.`;

  // Calculate annual time saved
  const annualTimeSaved = Math.round(timeSaved * 52);

  return (
    <section className="bg-card rounded-2xl border border-gray-100 md:p-6 p-4 w-full flex flex-col gap-8 shadow-sm" aria-label="Results summary: hours selling vs admin">
      <SavingsDescription fromHours={Math.round(sellingWithoutClarify)} toHours={Math.round(sellingWithClarify)} />
      <SavingsRow kpi1={`${Math.round(timeSaved)} hours`} kpi2={`$${weeklyCostSavings.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`} />
      <ResultsChart chartData={chartData} chartHours={chartHours} ariaMessage={ariaMessage} />
    </section>
  );
};

export default ResultsCard; 