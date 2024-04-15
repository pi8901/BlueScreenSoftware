'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

 const bestDays= [
     {
     name: 'Montag',
     besucher: 8000,
     },
     {
     name: 'Dienstag',
     besucher: 6000,
     },
     {
     name: 'Mittwoch',
     besucher: 5000,
     },
     {
     name: 'Donnerstag',
     besucher: 6000,
     },
     {
     name: 'Freitag',
     besucher: 9000,
     },
     {
     name: 'Samstag',
     besucher: 7700,
     },
     {
     name: 'Sonntag',
     besucher: 2000,
     }
 ];

const LineChartComponent = () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={bestDays}
          margin={{
            right: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="besucher" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  export default LineChartComponent;
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm text-blue-400">
            Revenue:
            <span className="ml-2">${payload[0].value}</span>
          </p>
          <p className="text-sm text-indigo-400">
            Profit:
            <span className="ml-2">${payload[1].value}</span>
          </p>
        </div>
      );
    }
  };