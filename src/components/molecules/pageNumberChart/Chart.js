import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from '../../atoms/gridElementTitle/Title';
import './chart.css'

export default class Chart extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <Title>{this.props.title}</Title>
        <ResponsiveContainer width="100%" height="90%" className="chart-container">
          <LineChart
            className="chart-custom"
            data={this.props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="chart-cartesian" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="extracted" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="translated" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
          
      </React.Fragment>
    );
  }
}
