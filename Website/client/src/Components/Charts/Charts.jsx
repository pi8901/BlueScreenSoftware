import React, { useEffect, useState } from 'react';
import "./Charts.css"
import AreaChart from './AreaChart.jsx';
import BarChart from './BarChart.jsx';
import LineChart from "./LineChart.jsx"
import axios from 'axios';
import { RingLoader } from 'react-spinners';

const Charts = () => {

  const api_endpoint = "http://localhost:8080/absolute";
  const [apiResponse, setApiResponse] = useState("Loading...");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(api_endpoint)
      .then(response => {
        setApiResponse(response.data);
      })
      .catch(error => {
        console.error('Fehler beim Laden der API-Daten', error);
        setApiResponse('Fehler beim Laden der Daten oder noch keine hochgeladen');
      });
  };

  return (
    <div className='charts bg-[#252525]'>
      <h1 className='partingline'>Lorem Ipsum</h1>
      <RingLoader speedMultiplier={1} color="var(--logoColor)" className='mr-auto ml-auto' />
      <hr className='partingline_one' />

      <div className='flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-33'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 w-full gap-10 max-w-[1440px]'>
          <GridItem title='Area Chart'>
            <AreaChart />
          </GridItem>
          <GridItem title='Bar Chart'>
            <BarChart />
          </GridItem>
          <GridItem title='Line Chart'>
            <LineChart />
          </GridItem>
        </div>
      </div>

      <hr className='partingline_one' />
      <div className='flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-33'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 w-full gap-10 max-w-[1440px]'>
          <GridItem title='Area Chart'>
            <LineChart />
          </GridItem>
          <GridItem title='Bar Chart'>
            <BarChart />
          </GridItem>
        </div>
      </div>
      
      
      <button onClick={fetchData} className="mt-4 bg-[#5b6bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Daten neu laden
      </button>
      <h1 className='text-white'>{JSON.stringify(apiResponse)}</h1>
    </div>
  );
}

export default Charts; 

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
