"use client"

import React, { useEffect, useState, useCallback } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { useMediaQuery } from "react-responsive";

const ClientStatistic = (props) => {
    const [isClient, setIsClient] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const isResponsive = useMediaQuery({
      query: "(max-width:768px)"
    })
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    const onPieEnter = useCallback(
      (_, index) => {
        setActiveIndex(index);
      },
      [setActiveIndex]
    );
  
  
    if (!isClient) {
      return null;
    }
  
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
          follower,
          unit
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
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontWeight={700} fontSize={24}>
              {payload.name}
            </text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={'#ffffff'}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={'#38bdf8'}
            />
            <text
              x={cx}
              y={cy + 36}
              textAnchor={"middle"}
              fill="#ffffff"
              fontWeight={700}
              fontSize={12}
            >{`${follower}${unit} takipçi`}</text>
          </g>
        );
      };
    return (
        <PieChart width={400} height={400} className={` ${isResponsive ? 'scale-75' : 'scale-90'}`}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={props?.stats}
            cx={200}
            cy={200}
            innerRadius={70}
            outerRadius={90}
            fill="#38bdf8 "
            dataKey="value"
            onMouseEnter={onPieEnter}
            border="#8884d8"
          />
        </PieChart>
    )
}

export {ClientStatistic};