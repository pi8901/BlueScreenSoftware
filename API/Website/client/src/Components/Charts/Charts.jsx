import React, { useEffect, useState } from 'react';
import "./Charts.css"

import BarChart from './BarChart.jsx';

import TopFlopChart from './topflopChart.jsx';
import AprioriChart from './aprioriChart.jsx';
import { RingLoader } from 'react-spinners';
import { useData } from '../DataContext/DataContext';

const Charts = () => {

  const { fetchData, data: apiResponse, loading, error } = useData(); 


  return (
    <div className='charts bg-[#252525]'>
      <h1 className='partingline'>Lorem Ipsum</h1>
      <RingLoader speedMultiplier={1} color="var(--logoColor)" className='mr-auto ml-auto' />
      <hr className='partingline_one' />

      <div className='flex min-h-screen flex-col items-center justify-center px-4 md:px-6 xl:px-8 py-33'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 w-full gap-10 max-w-[1440px]'>
          <GridItem title='Turnover Chart'>
            <BarChart />
          </GridItem>
          <GridItem title='Topflop Chart'>
            <TopFlopChart />
          </GridItem>
        </div>
        <div className='grid xl:grid-cols-1 lg:grid-cols-1 w-full gap-10 max-w-[1440px] mt-8'>
            <div className="flex flex-col items-center justify-center pl-2 pb-2 pt-8 border border-slate-900 bg-slate-900/50 rounded-xl h-[600px]">
               <h3 className="text-2xl font-semibold text-white mb-4">Apriori Chart</h3>
              <AprioriChart />
            </div> 
        </div>
      </div>
      <h1 className='text-white'>{JSON.stringify(apiResponse)}</h1>

    </div>
  );
}

export default Charts; 

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[450px]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
