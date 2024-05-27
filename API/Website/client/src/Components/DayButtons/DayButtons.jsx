import React, { useEffect, useState } from 'react';
import { useData } from '../DataContext/DataContext';

const DayButtons = () => {
    const { data, loading, error, fetchData } = useData();
    const [highlightedDay, setHighlightedDay] = useState('');
    const [turnoverValue, setTurnoverValue] = useState('');

    useEffect(() => {
        fetchData('turnover/day');
    }, []);

    useEffect(() => {
        if (data['turnover/day']) {
            console.log("API Response:", data['turnover/day']); // Debugging: Ausgabe der API-Antwort
            const lines = data['turnover/day'].split('\n');
            const [day, value] = lines[0].split(',');
            console.log("Extracted Day:", day); // Debugging: Ausgabe des extrahierten Tages
            console.log("Extracted Value:", value); // Debugging: Ausgabe des extrahierten Werts
            setHighlightedDay(day);
            setTurnoverValue(value);
        }
    }, [data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    const germanDays = {
        Mo: 'Montag',
        Di: 'Dienstag',
        Mi: 'Mittwoch',
        Do: 'Donnerstag',
        Fr: 'Freitag',
        Sa: 'Samstag',
        So: 'Sonntag'
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-7 gap-2 w-full">
                {days.map(day => (
                    <button
                        key={day}
                        className={`py-2 px-4 w-full rounded-md ${germanDays[day] === highlightedDay ? 'bg-green-500' : 'bg-blue-500'} text-white text-center`}
                    >
                        {day}
                    </button>
                ))}
            </div>
            {turnoverValue && <p className="text-white mt-4">Umsatz: {turnoverValue}</p>}
        </div>
    );
}

export default DayButtons;
