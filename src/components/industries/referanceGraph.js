"use client"

import React, { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { Manrope } from "next/font/google";

const font = Manrope({
    subsets: ['latin']
})
const ReferanceGraph = (val) => {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
      setIsClient(true);
  }, []);

  if (!isClient) {
      return null;
  }
  function handlePieEnter(_, index) {
    setActiveIndex(index);
  }
    const data = [
        { 
            name: `${val.name1}`,
            value: val.val1, 
            worth: val.worth1,
            currency: val.currency
        },
        { 
            name: `${val.name2}`, 
            value: val.val2, 
            worth: val.worth2,
            currency: val.currency
        }
      ];

      const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          startAngle,
          endAngle,
          fill,
          payload,
          percent,
          worth
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? "start" : "end";
      
        return (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontSize={10}>
              {payload.name}
            </text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={'#475569'}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <path
              d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={fill}
              fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill="#ffffff"
            >{`$ ${worth}${val.currency}`}</text>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              dy={18}
              textAnchor={textAnchor}
              fill="#ffffff"
            >
              {`(Rate ${(percent * 100).toFixed(0)}%)`}
            </text>
          </g>
        );
      };
      
      
    return (
      <div className={` ${font.className} flex flex-col items-center justify-center lg:flex-row w-full lg:h-screen md:h-screen h-screen bg-slate-950 shadow-2xl`}>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="lg:scale-150 scale-90 sm:scale-75 md:scale-90 ">
            <center>
            <PieChart width={400} height={400}>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={200}
                cy={200}
                innerRadius={70}
                outerRadius={80}
                fill="#FFFFFF"
                dataKey="value"
                onMouseEnter={handlePieEnter}
                border="#000000"
              />
            </PieChart>
            </center>
          </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:pt-2 md:pt-8 ">
        <h1 className="text-center lg:text-3xl md:text-4xl sm:text-3xl text-md text-white block tracking-tight" id="section_font">
          <a href="https://www.statista.com/" className="text-slate-600 text-sm lg:text-lg md:text-md sm:text-sm" id="section_font">-{val.link}-</a>
          <br />
          {val.header}
          <h3 className="text-center lg:text-lg md:text-lg sm:text-sm text-sm px-8 mb-8 tracking-tighter text-slate-600 font-light">
            <br />
            {val.desc}
          </h3>
        </h1>
      </div>
    </div>
    
    )
}

export {ReferanceGraph}