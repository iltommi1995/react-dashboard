import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TotalViews from '../SP_totalViews/totalViews';

import './totalViewsGridElement.css'

export default function TotalViewsGridElement(props) {
    return (
        <Grid item xs={12} md={4} lg={4} className="total-views-grid-element">
            <Paper
                sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
                className="total-views-paper paper-custom"
            >
                <TotalViews data={props.data} />
            </Paper>
        </Grid>
    )
}