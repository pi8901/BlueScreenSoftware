import React, { useEffect, useState } from 'react';
import "./Charts.css";
import BarChart from './BarChart.jsx';
import TopFlopChart from './topflopChart.jsx';
import AprioriChart from './aprioriChart.jsx';
import { RingLoader } from 'react-spinners';
import { useData } from '../DataContext/DataContext';
import DayButtons from '../DayButtons/DayButtons';
import Clock from '../Clock/Clock.jsx';
import BestTimeValue from '../bestTimeValue/bestTimeValue.jsx';

const Charts = () => {
  const { fetchData, data: apiResponse, loading, error } = useData(); 

  return (
    <div className='charts bg-[#252525]'>
      <div className='circle w-[520px] h-[400px] bg-[#265ffd] rounded-[100%] absolute z-9 top-[110%] left-[50%] translate-x-[-200%] translate-y-[20%] blur-[1000px]'></div>
      <h1 className='partingline font-medium'>Ihre Statistikauswertung</h1>
      {loading && <RingLoader speedMultiplier={1} color="var(--logoColor)" className='mr-auto ml-auto' />}

      <div className='flex min-h-screen flex-col items-center justify-center px-4 md:px-6 xl:px-8 py-33'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 w-full gap-10 max-w-[1440px]'>
          <GridItem title='Turnover Diagramm'>
            <BarChart />
          </GridItem>
          <GridItem title='Topflop Diagramm'>
            <TopFlopChart />
          </GridItem>
        </div>

        <div className='grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1440px] mt-8'>
          <GridItem2 title='Umsatzstärkster Tag'>
            <DayButtons />
          </GridItem2>
          <GridItem2 title='Umsatzstärkste Uhrzeit'>
            <Clock />
          </GridItem2>
          <GridItem2 title={<div style={{ textAlign: 'center', fontSize: '1.5rem'}}><span>Stärkster Einkaufstag/Einkaufsuhrzeit,</span><br /><span>nach Kundenhäufigkeit</span></div>}>
            <BestTimeValue />
          </GridItem2>
        </div>

        <div className='grid xl:grid-cols-1 lg:grid-cols-1 w-full gap-10 max-w-[1440px] mt-8'>
          <div className="flex flex-col items-center justify-center pl-2 pb-2 pt-8 border border-slate-900 bg-slate-900/50 rounded-xl h-[600px] shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-4">Apriori Diagramm</h3>
            <AprioriChart />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Charts; 

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[450px] shadow-xl">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}

function GridItem2({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[300px] shadow-xl">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        {children}
    </div>
  );
}
