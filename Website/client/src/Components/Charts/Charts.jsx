import React from 'react';

import "./Charts.css"
import AreaChart from './AreaChart.jsx';
import BarChart from './BarChart.jsx';
import LineChart from "./LineChart.jsx"




const Charts = () => {
  return (
      <div className='charts'>
        <h1 className='partingline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <hr className='partingline_one'/>

        <div className='flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-33'>
          <div className='grid xl:grid-cols-2 lg:grid-cols-2 w-full gap-10 max-w-[1440px]'>
              <GridItem title='Area Chart'>
                <AreaChart/>
              </GridItem>
              <GridItem title='Bar Chart'>
                <BarChart />
              </GridItem>
              <GridItem title='Line Chart'>
                <LineChart />
              </GridItem>
          </div>
        </div>
        <hr className='partingline_one'/>
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