import React, { useEffect, useState } from 'react';
import { useData } from '../DataContext/DataContext';
import dayjs from 'dayjs';

const BestTimeValue = () => {
    const { data, loading, error, fetchData } = useData();
    const [bestDay, setBestDay] = useState('');
    const [bestTime, setBestTime] = useState('');

    useEffect(() => {
        fetchData('turnover/customer');
    }, []);

    useEffect(() => {
        if (data['turnover/customer']) {
            const [day, time] = data['turnover/customer'].split(',');
            setBestDay(day);
            setBestTime(time.replace(/'/g, '').trim()); // Entferne unnötige Zeichen und trimme Leerzeichen
        }
    }, [data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-white">Stärkster Einkaufstag</h4>
                <p className="text-3xl text-green-500">{bestDay}</p>
            </div>
            <div className="text-center">
                <h4 className="text-lg font-semibold text-white">Stärkste Einkaufsuhrzeit</h4>
                <p className="text-3xl text-green-500">{bestTime}</p>
            </div>
        </div>
    );
}

export default BestTimeValue;
