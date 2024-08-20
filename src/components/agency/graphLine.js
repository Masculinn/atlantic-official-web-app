import React, { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { useMediaQuery } from 'react-responsive';

const GraphLine = (props) => {
    const [isClient, setIsClient] = useState(false);
    const [p1, setP1] = useState(null);
    const [p2, setP2] = useState(null);
    const [p3, setP3] = useState(null);
    const [p4, setP4] = useState(null);
    
    const res = useMediaQuery({
        query: '(max-width:768px)',
    });

    const rndmNmbr = () => {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 1000);
        const z = Math.floor(Math.random() * 5000);
        const v = Math.floor(Math.random() * 5000);

        setP1(v);
        setP2(y);
        setP3(z);
        setP4(x);
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            console.log(props.activate);
            const shake = setInterval(rndmNmbr, 2000);
            props.activate && clearInterval(shake);            
            return () => {
                clearInterval(shake);
            };
        }
    }, [isClient, props.activate]);

    return (
        <ResponsiveContainer width="100%" height={res ? 150 : 200}>
            <AreaChart
                data={[
                    {
                        uv: props.activate ? 1000 :p1 ,
                        amt: 2400,
                    },
                    {
                        uv: props.activate ? 2500 :p2 ,
                        amt: 2210,
                    },
                    {
                        uv: props.activate ? 7500 :p3 ,
                        amt: 2500,
                    },
                    {
                        uv: props.activate ? 15000 :p4 ,
                        amt: 2100,
                    },
                ]}
                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
            >
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
};


export { GraphLine };
