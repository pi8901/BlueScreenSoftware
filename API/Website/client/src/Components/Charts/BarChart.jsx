import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useData } from '../DataContext/DataContext'; // Angenommen, du hast einen DataContext

const BarChartComponent = () => {
  const { data, loading, error, fetchData } = useData();
  const [transformedData, setTransformedData] = useState([]);

  useEffect(() => {
    fetchData('absolute'); // Endpunkt für die topflop-Daten
  }, []);

  useEffect(() => {
    if (data.topflop) {
      const formattedData = data.topflop.map(item => ({
        name: item.attribute,
        value: item.value,
      }));
      setTransformedData(formattedData);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px' }}>
          <p className="label">{`Attribute: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="label">{`${entry.name}: ${entry.value}`}</p>
          ))}
        </div>
      );
    }
    return null;
  };
  


  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
      className=''
        width={500}
        height={300}
        data={transformedData}
        margin={{top: 20, right: 30, left: 15, bottom: 50,
        }}
        barGap={10} // Abstand zwischen den Balken
        barCategoryGap={5} // Abstand zwischen den Balkengruppen
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          angle={-30}
          textAnchor="end"
          interval={0}
          />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill="var(--logoColor)" barGap={0.5}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
