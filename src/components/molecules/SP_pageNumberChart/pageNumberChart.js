import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import GridElementTitle from '../../atoms/gridElementTitle/gridElementTitle';
import './pageNumberChart.scss'

export default class Chart extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <GridElementTitle>{this.props.title}</GridElementTitle>
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
            <Line type="monotone" dataKey="extracted" stroke="#ad6302" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="translated" stroke="#0F172C" />
          </LineChart>
        </ResponsiveContainer>
          
      </React.Fragment>
    );
  }
}
