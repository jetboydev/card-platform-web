'use client';
import CountUp from 'react-countup';

// Deliberately limited to facts that are true by construction (matches the site's own
// feature set), since usage/growth numbers are business facts we can't verify yet.
// TODO: once TranX has real, verified usage data (active users, ratings, store stats),
// consider reinstating a growth-metrics stats section using those confirmed numbers.
const stats = [
  {
    value: 4,
    unit: '',
    label: 'Phương thức dịch',
    description: 'Văn bản, giọng nói, camera, tài liệu',
  },
  { value: 2, unit: '', label: 'Ngôn ngữ giao diện', description: 'Tiếng Việt & English' },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                <CountUp end={stat.value} duration={2} /> {stat.unit}
              </div>
              <div className="text-slate-900 font-medium">{stat.label}</div>
              <div className="text-sm text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
