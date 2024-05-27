import React, { useEffect, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useData } from '../DataContext/DataContext';

const AprioriChart = () => {
    const { data, loading, error, fetchData } = useData();
    const [transformedData, setTransformedData] = useState([]);
    const [premises, setPremises] = useState([]);
    const [consequences, setConsequences] = useState([]);

    useEffect(() => {
        fetchData('apriori');
    }, []);

    useEffect(() => {
        if (data.apriori) {
            
            const premisesSet = [...new Set(data.apriori.map(item => item.premise))];
            const consequencesSet = [...new Set(data.apriori.map(item => item.consequence))];

            setPremises(premisesSet);
            setConsequences(consequencesSet);

            
            const premiseIndexMap = premisesSet.reduce((acc, premise, index) => ({ ...acc, [premise]: index }), {});
            const consequenceIndexMap = consequencesSet.reduce((acc, consequence, index) => ({ ...acc, [consequence]: index }), {});

            
            const formattedData = data.apriori.map(item => ({
                x: premiseIndexMap[item.premise],
                y: consequenceIndexMap[item.consequence]
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

    const CustomTooltip = ({ active, payload, label, premises, consequences }) => {
      if (active && payload && payload.length) {
          const { x, y } = payload[0].payload;
          return (
              <div className="custom-tooltip" style={{ backgroundColor: 'var(--logoColor)', padding: '10px', border: '1px solid var(--logoColor)' }}>
                  <p className="label">{`Premise: ${premises[x]}`}</p>
                  <p className="label">{`Consequence: ${consequences[y]}`}</p>
              </div>
          );
      }
      return null;
  };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 150, left: 175 } }>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis
                    type="number"
                    dataKey="x"
                    name="Premise"
                    tickFormatter={(tick) => premises[tick] || ""}
                    ticks={Object.keys(premises).map(key => parseInt(key))}
                    interval={0}
                    angle={-25}
                    textAnchor="end"
                />
                <YAxis
                    type="number"
                    dataKey="y"
                    name="Consequence"
                    tickFormatter={(tick) => consequences[tick] || ""}
                    ticks={Object.keys(consequences).map(key => parseInt(key))}
                    interval={0}
                />
                <Tooltip
                    content={<CustomTooltip premises={premises} consequences={consequences} />}
                />
                <Scatter name="Apriori Analysis" data={transformedData} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    );
}

export default AprioriChart;
