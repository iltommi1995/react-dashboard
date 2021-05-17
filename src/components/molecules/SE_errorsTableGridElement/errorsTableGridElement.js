import React from 'react'
import Grid from '@material-ui/core/Grid';


import './errorsTableGridElement.css'
import ErrorsTable from '../SE_errorsTable/errorsTable';



export default function ErrorsTableGridElement(props) {
    

    return (
        <Grid item xs={12} md={8} lg={8} className="errors-table-grid-element">
            <ErrorsTable data={props.data}/>
        </Grid>
    )
}