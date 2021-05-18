import React from 'react'
import Grid from '@material-ui/core/Grid';


import './mostViewedCategoriesGridElement.scss'
import MostViewedCategoriesTable from '../SC_mostViewedCategoriesTable/mostViewedCategoriesTable';




export default function MostViewedCategoriesGridElement(props) {
    
    return (
        <Grid item className="most-viewed-categories-grid-element">
            
            <MostViewedCategoriesTable data={props.data} selectCategory={props.selectCategory}/>
        </Grid>
    )
}