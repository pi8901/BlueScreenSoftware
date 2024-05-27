import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { useEffect, useState } from 'react';
import { useData } from '../DataContext/DataContext';

const Clock = () => {
    const { data, loading, error, fetchData } = useData();
    const [strongestHour, setStrongestHour] = useState(null);
    const [strongestHourValue, setStrongestHourValue] = useState(null);

    useEffect(() => {
        fetchData('turnover/hour');
    }, []);

    useEffect(() => {
        if (data['turnover/hour']) {
            console.log("API Response:", data['turnover/hour']);
            const lines = data['turnover/hour'].split('\n');
            const [hourRange, value] = lines[0].split(',');
            const hour = hourRange.split('-')[0].replace(/'/g, '').trim(); // Nur die erste Stunde extrahieren und Anführungszeichen entfernen
            console.log("Extracted Hour:", hour); // Debugging: Ausgabe der extrahierten Stunde
            console.log("Extracted Value:", value); // Debugging: Ausgabe des extrahierten Werts
            setStrongestHour(hour);
            setStrongestHourValue(value);
        }
    }, [data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const timeValue = strongestHour ? dayjs().hour(Number(strongestHour)).minute(0) : null;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimeClock']}>
                <DemoItem label="">
                    <TimeClock 
                        value={timeValue} 
                        readOnly 
                    />
                </DemoItem>
            </DemoContainer>
            {strongestHourValue && <p className="text-white mt-4">Umsatz: {strongestHourValue}</p>}
        </LocalizationProvider>
    );
}

export default Clock;
