import React from 'react'
import GridElementTitle from "../../atoms/gridElementTitle/gridElementTitle"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import './categoryDetailsGridElement.scss'
import CategoryDetailsMostViewedTable from '../SC_categoryDetailsMostViewedTable/categoryDetailsMostViewedTable';



export default function CategoryDetailsGridElement(props) {
    return (
        <Grid item className="category-details-grid-element">
            <Paper
                sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}
                className="paper-custom prova"
            >
                <GridElementTitle children={props.category == null ? 'No category selected': `${props.category.name}`} />
                <div className="category-details-container">
                    <div className="category-details-info-box">
                            <div>Pages: {props.category == null ? "no category selected" : props.category.pageNumber}</div>
                            <div>Views: {props.category == null ? "no category selected" : props.category.views}</div>
                    </div>

                    <div className="category-details-most-viewed">
                        <h4 className="category-details-table-title">Most viewed pages</h4>
                        <CategoryDetailsMostViewedTable pagesData={props.category.pages}/>
                    </div>
                </div>
            </Paper>
        </Grid>
    )
}