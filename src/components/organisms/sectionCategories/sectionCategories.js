import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Copyright from '../../molecules/copyright/copyright'
import SectionTitle from '../../atoms/sectionTitle/sectionTitle';


import './sectionCategories.css'
import SearchBarGridElement from '../../molecules/searchBarGridElement/searchBarGridElement';
import MostViewedCategoriesGridElement from '../../molecules/mostViewedCategoriesGridElement/mostViewedCategoriesGridElement';
import CategoryDetailsGridElement from '../../molecules/categoryDetailsGridElement/categoryDetailsGridElement';



export default function SectionCategories(props) {

  
  const [category, setCategory] = React.useState(props.categoriesData[0]);

  const selectCategory = (newCategory) => {
    if(newCategory != null)
      setCategory(newCategory)
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className={props.sectionClass + " central-error-section-container"} style={{ display: props.initialDisplay }}>
      {/* Griglia in cui sistemare gli elementi */}
      <Grid container spacing={3} className="grid-container-error-custom">

        {/* Titolo della sezione */}
        <SectionTitle sectionName={props.sectionName} />

        {/* Barra di ricerca */}
        <SearchBarGridElement selectCategory={selectCategory} data={props.categoriesData} />

        {/* Categorie più viste */}
        <MostViewedCategoriesGridElement selectCategory={selectCategory} data={props.categoriesData} />

        {/* Dettagli singola categoria */}
        <CategoryDetailsGridElement category={category} data={props.categoriesData} />


        {/* Copyright a fondo pagina */}
        <Copyright sx={{ pt: 4 }} />

      </Grid>



    </Container>
  )
}