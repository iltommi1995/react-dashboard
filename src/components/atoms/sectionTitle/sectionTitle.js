import React from 'react'
import Grid from '@material-ui/core/Grid';

import './sectionTitle.css'
export default function SectionTitle(props) {
    return (
        <Grid item xs={12} md={12} lg={12} className="section-title">
            <h2 className="section-title-h2">{props.sectionName}</h2>
        </Grid>
    )
}