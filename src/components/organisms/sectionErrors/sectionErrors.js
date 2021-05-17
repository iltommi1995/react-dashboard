import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Copyright from '../../molecules/copyright/copyright'
import SectionTitle from '../../atoms/sectionTitle/sectionTitle';
import ErrorsTableGridElement from '../../molecules/SE_errorsTableGridElement/errorsTableGridElement';

import './sectionErrors.css'
export default function SectionErrors (props) {
    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className = {props.sectionClass + " central-error-section-container"} style={{display: props.initialDisplay}}>
        {/* Griglia in cui sistemare gli elementi */}
        <Grid container spacing={3} className="grid-container-error-custom">

          {/* Titolo della sezione */}
          <SectionTitle sectionName={props.sectionName} />

            <ErrorsTableGridElement data={props.errorsData} />
          

          {/* Copyright a fondo pagina */}
          <Copyright sx={{ pt: 4 }} />

        </Grid>

        

      </Container>
    )
}