import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from '../SP_pageNumberChart/pageNumberChart';

import "./pageNumberChartGridElement.scss"

export default function ChartGridElement(props) {
    return (
        <Grid item xs={12} md={8} lg={8} className="chart-grid-element">
            <Paper
                sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}
                className="graph-container"
            >
                <Chart data={props.data} title={props.title}/>
            </Paper>
        </Grid>
    )
}