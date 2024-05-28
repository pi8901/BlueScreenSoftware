import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { useData } from '../DataContext/DataContext';

// Custom Label Rendering
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index, attribute
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 25; // Position the label 20 units outside the pie
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${attribute} (${(percent * 100).toFixed(2)}%)`}
    </text>
  );
};

const TopFlopChart = () => {
    const { data, loading, error, fetchData } = useData();
    const [topflopData, setTopFlopData] = useState([]);

    useEffect(() => {
        fetchData('topflop');
    }, []);

    useEffect(() => {
        if (data.topflop) {
            // Daten formatieren, indem der 'value'-Wert jedes Eintrags mit 100 multipliziert wird
            const formattedData = data.topflop.map(entry => ({
                ...entry,
                value: parseFloat((entry.value * 100).toFixed(2)) 
            }));
            setTopFlopData(formattedData);
        }
    }, [data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    stroke="black"
                    strokeWidth={0.2}
                    data={topflopData}
                    dataKey="value"
                    nameKey="attribute"
                    cx="50%"
                    cy="50%"
                    outerRadius={115}
                    fill="var(--logoColor)"
                    label={renderCustomizedLabel}
                    labelLine={true}
                    paddingAngle={2}
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default TopFlopChart;
