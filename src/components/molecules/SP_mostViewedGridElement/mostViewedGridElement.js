import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from '../../atoms/gridElementTitle/Title';


import './mostViewedGridElement.css'
import MostViewedTable from '../SP_mostViewedTable/mostViewedTable';



export default function MostViewedGridElement(props) {

    return (
        <Grid item xs={12} md={4} lg={4} className="most-viewed-grid-element">
            <Paper
                sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
                className="most-viewed-paper paper-custom"
            >
                <Title children="Most viewed pages" />
                <MostViewedTable data={props.data} />
            </Paper>
        </Grid>
    )
}