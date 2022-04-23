import React from 'react';
import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Legend, Bar, PieChart, Pie } from 'recharts';

const Recharts = () => {
    const [recharts, setRecharts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRecharts(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-bold m-4 text-center'>This is my Salary Charts</h1>
            <div className='grid grid-cols-1 xl:grid-cols-2 justify-evenly m-10'>
                <LineChart width={600} height={300} data={recharts}>
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip />
                </LineChart>

                <AreaChart width={730} height={250} data={recharts}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 justify-evenly m-10'>
                <BarChart width={730} height={250} data={recharts}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                </BarChart>

                <PieChart width={730} height={250}>
                    <Pie data={recharts} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={recharts} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Recharts;