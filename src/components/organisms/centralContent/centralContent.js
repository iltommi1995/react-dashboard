import React from 'react'
import Box from '@material-ui/core/Box';


import "./centralContent.scss"

// Dati dei grafici

import GlobalChartData from './globalChart.json'
import ItalianChartData from './italianChart.json'
import EnglishChartData from './englishChart.json'

// Dati total views

import GlobalTotalViewsData from './globalTotViews.json'
import ItalianTotalViewsData from './italianTotViews.json'
import EnglishTotalViewsData from './englishTotViews.json'

// Dati most viewed

import GlobalMostViewedData from './globalMostViewedData.json'
import ItalianMostViewedData from './italianMostViewedData.json'
import EnglishMostViewedData from './englishMostViewedData.json'

// Dati Errors

import ErrorsData from './totErrorsData.json'

// Dati Categories

import CategoriesData from './categoriesData.json'

import SectionPageStats from '../sectionPageStats/sectionPageStats';
import SectionErrors from '../sectionErrors/sectionErrors';
import SectionCategories from '../sectionCategories/sectionCategories';



export default function CentralContent(props) {
    return(
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
        className="boxCentralContent"
      >

        {/* SEZIONE GLOBALE */}
        <SectionPageStats sectionName="GLOBAL PAGES STATS" sectionClass="globalSection" initialDisplay="" chartData={GlobalChartData} chartTitle="Global pages" totalViewsData={GlobalTotalViewsData} mostViewedData={GlobalMostViewedData} />

        {/* SEZIONE ITALIA */}
        <SectionPageStats sectionName="ITALIAN PAGES STATS" sectionClass="italianSection" initialDisplay="none" chartData={ItalianChartData} chartTitle="Italian pages" totalViewsData={ItalianTotalViewsData} mostViewedData={ItalianMostViewedData} />

        {/* SEZIONE INGLESE */}
        <SectionPageStats sectionName="ENGLISH PAGES STATS" sectionClass="englishSection" initialDisplay="none" chartData={EnglishChartData} chartTitle="English pages" totalViewsData={EnglishTotalViewsData} mostViewedData={EnglishMostViewedData} />

        {/* SEZIONE ERRORI */}
        <SectionErrors sectionName="ERRORS" sectionClass="errorSection" initialDisplay="none" chartData="" chartTitle="Global pages" errorsData={ErrorsData} />

        {/* SEZIONE CATEGORIE */}
        <SectionCategories sectionName="CATEGORIES" sectionClass="categoriesSection" initialDisplay="none" categoriesData={CategoriesData} />
        
      </Box>
    )
}