import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Categories = ({ results }) => {
const capitalize = (str) =>
  typeof str === "string" ? str.charAt(0).toUpperCase() + str.slice(1) : "N/A";

const productName = capitalize(results?.name);
const productCategory = capitalize(results?.category);


  // Mock data
const lineChartData = {
  series: [
    {
      name: productName,
      data: [30, 40, 35, 50, 49, 60, 70],
    },
    {
      name: 'Average Market Demand Score',
      data: [20, 30, 25, 40, 35, 45, 55],
    },
  ],
  options: {
    chart: {
      id: 'market-demand',
      toolbar: { show: false },
    },
    stroke: { curve: 'smooth', width: 2 },
    markers: { size: 4 },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: {
          colors: '#FfFfFf', // Color for months
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#FfFfFf', // Color for 70, 60, etc.
        },
      },
    },
    colors: ['#FBAD41', '#C088FB'],
    legend: {
      labels: {
        colors: '#F4F4F4', // Color for legend labels
      },
    },
    tooltip: { enabled: false },
  },
};


const barChartData = {
  series: [
    {
      name: 'Products',
      data: [80],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        horizontal: true,
      },
    },
    xaxis: {
      categories: [productCategory],
      labels: {
        style: {
          colors: ['#FfFfFf'], // Color for category labels (Product Category)
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#FfFfFf'], // Color for y-axis labels (values like 80, 60)
        },
      },
    },
    colors: ['#C088FB'],
    tooltip: { enabled: false },
    grid: { borderColor: '#444' },
  },
};


  const scatterData = {
    series: [
      {
        name: 'Trending Categories',
        data: [
          { x: 'Video', y: 70 },
          { x: 'Social', y: 50 },
          { x: productCategory, y: 90 },
          { x: 'Design', y: 30 },
        ],
      },
    ],
    options: {
      chart: {
        type: 'scatter',
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      xaxis: { tickAmount: 4, labels: { style: { colors: '#f4f4f4' } } },
      yaxis: { labels: { style: { colors: '#f4f4f4' } } },
      colors: ['#FBAD41'],
      markers: { size: 8 },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className='flex flex-col gap-2.5'>
      <div className='grid gap-2.5 grid-cols-4 grid-rows-1 h-[87.6px]'>
        {['Estimated Views', 'Potential Click-Through Rate (CTR)', 'Conversion Rate', 'Projected Revenue'].map((label, i) => (
          <div key={i} className='flex flex-col justify-center items-start gap-1.5 p-4 rounded-[17px] text-[#F4F4F4] bg-[#131314]'>
            <h1 className='text-[10.78px] font-medium'>{label}</h1>
            <h1 className='font-bold text-[24.26px]'>0</h1>
          </div>
        ))}
      </div>

      <div className='grid gap-2.5 grid-cols-2 grid-rows-1'>
        <div className='flex flex-col rounded-[16.85px] bg-[#131314] py-3.5 px-4 gap-[22.6px] relative z-0 overflow-visible'>
          <div className='flex flex-col justify-center items-start gap-1.5 text-[#F4F4F4]'>
            <h1 className='text-[16.78px] font-bold text-left'>Trending Categories</h1>
            <h1 className='text-[9.43px] text-left'>This is how <span className='capitalize'>{productName}</span> stands out among others</h1>
          </div>
          <Chart options={scatterData.options} series={scatterData.series} type="scatter" height={250} />
        </div>

        <div className='grid gap-2.5 grid-cols-1 grid-rows-2'>
          <div className='flex flex-col rounded-[16.85px] bg-[#131314] py-3.5 px-4 gap-[19.54px] relative z-0 overflow-visible'>
            <div className='flex flex-row gap-[19.54px] items-center'>
              <div className='flex flex-col gap-[6.78px] text-[#f4f4f4]'>
                <h1 className='text-base font-bold'>Market Demand Score</h1>
                <p className='text-[10px] font-normal'>This is how <span className='capitalize'>{productName}</span> stands in Popularity of the category.</p>
              </div>
              <div className='flex flex-col gap-[6px]'>
                <div className='flex flex-row gap-1'>
                  <span className='w-[11.46px] h-[11.46px] rounded-full bg-[#FBAD41]'></span>
                  <p className='capitalize text-[10px] font-normal text-[#f4f4f4]'>{productName}</p>
                </div>
                <div className='flex flex-row gap-1'>
                  <span className='w-[11.46px] h-[11.46px] rounded-full bg-[#C088FB]'></span>
                  <p className='capitalize text-[10px] font-normal text-[#f4f4f4]'>AVG Market Demand Score</p>
                </div>
              </div>
            </div>
            <Chart options={lineChartData.options} series={lineChartData.series} type='line' height={250} />
          </div>

          <div className='flex flex-col rounded-[16.85px] bg-[#131314] py-3.5 px-4 gap-[19.54px] relative z-0 overflow-visible'>
            <div className='flex flex-col gap-[6.78px] text-[#f4f4f4]'>
              <h1 className='text-base font-bold text-left'>Competitive Index</h1>
              <p className='text-[10px] font-normal text-left'>How many similar products exist</p>
            </div>
            <Chart options={barChartData.options} series={barChartData.series} type='bar' height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
