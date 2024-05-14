import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { useData } from '../DataContext/DataContext';

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
                <Pie data={topflopData} dataKey="value" nameKey="attribute" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label/>   
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default TopFlopChart;
