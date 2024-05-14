import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (endpoint) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8080/${endpoint}`);
            setData(prevData => ({...prevData, [endpoint]: response.data}));
            setError(null);
        } catch (err) {
            console.error('Fehler beim Laden der Daten:', err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DataContext.Provider value={{ data, loading, error, fetchData }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext };
