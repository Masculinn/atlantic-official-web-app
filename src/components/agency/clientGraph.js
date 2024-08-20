"use client"

import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ClientGraph = (props) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const formatYAxis = (value) => `${value}K`;

    if (!isClient) {
        return null;
    }
    const tooltipContentStyle = {
        backgroundColor: 'black', // Set your desired background color here
        border: '1px solid black ', // Add border for better visibility
        color: 'white', // Set text color
    };
    const tooltipFormatter = (value, name) => [`${value}K`, name];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={props?.stats}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={formatYAxis} />
                <Tooltip contentStyle={tooltipContentStyle} formatter={tooltipFormatter} />
                <Legend />
                <Bar dataKey="takip" stackId="a" fill="#38bdf8" />
                <Bar dataKey="hikaye" stackId="a" fill="#A07AFF" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export { ClientGraph };
