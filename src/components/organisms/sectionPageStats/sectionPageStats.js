import React from 'react'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Copyright from '../../molecules/copyright/copyright'
import SectionTitle from '../../atoms/sectionTitle/sectionTitle';
import PageNumberChartGridElement from '../../molecules/SP_pageNumberChartGridElement/pageNumberChartGridElement';
import TotalViewsGridElement from '../../molecules/SP_totalViewsGridElement/totalViewsGridElement';
import "./sectionPageStats.scss"
import MostViewedGridElement from '../../molecules/SP_mostViewedGridElement/mostViewedGridElement';

export default function SectionPageStats(props) {
    return (
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className = {props.sectionClass + " central-section-container"} style={{display: props.initialDisplay}}>
          {/* Griglia in cui sistemare gli elementi */}
          <Grid container spacing={3} className="grid-container-custom">

            {/* Titolo della sezione */}
            <SectionTitle sectionName={props.sectionName} />

            {/* Grafico della sezione */}
            <PageNumberChartGridElement data={props.chartData} title={props.chartTitle}/>

            {/* Visualizzazioni totali della sezione */}
            <TotalViewsGridElement data={props.totalViewsData} />

            {/* Pagine più viste della sezione */}
            <MostViewedGridElement data= {props.mostViewedData} />

            {/* Copyright a fondo pagina */}
            <Copyright sx={{ pt: 4 }} />

          </Grid>
        </Container>
      );
}
