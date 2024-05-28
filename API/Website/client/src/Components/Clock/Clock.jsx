import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { useEffect, useState } from 'react';
import { useData } from '../DataContext/DataContext';
import { green } from '@mui/material/colors';

const Clock = () => {
    const { data, loading, error, fetchData } = useData();
    const [strongestHour, setStrongestHour] = useState(null);
    const [strongestHourValue, setStrongestHourValue] = useState(null);

    useEffect(() => {
        fetchData('turnover/hour');
    }, []);

    useEffect(() => {
        if (data['turnover/hour']) {
            const lines = data['turnover/hour'].split('\n');
            const [hourRange, value] = lines[0].split(',');
            const hour = hourRange.split('-')[0].replace(/[^0-9]/g, '').trim(); // Nur die erste Stunde extrahieren und nicht-numerische Zeichen entfernen
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
            <DemoContainer components={['TimeClock']} sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                <DemoItem label="" sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',  }}>
                    <TimeClock 
                        value={timeValue} 
                        readOnly
                        sx={{
                            backgroundColor: 'transparent', // Setzt den Hintergrund der Uhr transparent
                            '.MuiTimeClock-root': {
                                backgroundColor: '#f0f0f0', // Ändert die Farbe des Ziffernblatts
                            },
                            transform: 'scale(0.85)', // Verkleinert die gesamte Uhr
                            transformOrigin: 'center', // Zentriert die Verkleinerung
                            '& .MuiTimeClock-arrowSwitcher': {
                                backgroundColor: '#4caf50', // Ändert die Farbe der Zeiger
                            },
                            '& .MuiClockNumber-root': {
                                color: '#ffffff', // Ändert die Farbe der Zahlen
                            },
                            '& .MuiClock-pin': {
                                backgroundColor: '#f0f0f0', // Ändert die Farbe des Pins in der Mitte
                            },
                            '& .MuiClock-amButton, & .MuiClock-pmButton': {
                                backgroundColor: '#4caf50', // Ändert die Farbe der AM/PM Buttons
                            },
                        }}
                    />
                </DemoItem>
            </DemoContainer>
            {strongestHourValue && <p className="text-white mt-4 text-lg">Umsatz: {strongestHourValue}€</p>}
        </LocalizationProvider>
    );
}

export default Clock;
