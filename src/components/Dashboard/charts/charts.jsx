import React from 'react';
import './charts.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Charts = () => {

    const data = [
        {
          name: "jan",
          uv: 2000,
        },
        {
          name: "feb",
          uv: 3000
        },
        {
          name: "mar",
          uv: 2000
        },
        {
          name: "apr",
          uv: 2780
        },
        {
          name: "may",
          uv: 1890
        },
        {
          name: "jun",
          uv: 2390
        },
        {
          name: "jul",
          uv: 3320
        },
        {
          name: "aug",
          uv: 3190
        },
        {
          name: "sep",
          uv: 3490
        },
        {
          name: "oct",
          uv: 2950
        },
        {
          name: "nov",
          uv: 3090
        },
        {
          name: "dec",
          uv: 2090
        }
      ];


  return (
    <div className="chart">
            <h3 className="chartTitle">
                customer stats
            </h3>
            <ResponsiveContainer width="100%" aspect={4 / 1} >
                <LineChart data={data}>
                      <XAxis dataKey="name" stroke='#5550bd' />
                      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Tooltip />
                    <CartesianGrid stroke='#5550bd' strokeDasharray="3 3" />
                    <Legend />
            
                </LineChart>
            </ResponsiveContainer>
        </div>
  )
}

export default Charts