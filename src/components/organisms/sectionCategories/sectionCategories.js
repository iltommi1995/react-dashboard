import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Copyright from '../../molecules/copyright/copyright'
import SectionTitle from '../../atoms/sectionTitle/sectionTitle';


import './sectionCategories.scss'
import SearchBarGridElement from '../../molecules/SC_searchBarGridElement/searchBarGridElement';
import MostViewedCategoriesGridElement from '../../molecules/SC_mostViewedCategoriesGridElement/mostViewedCategoriesGridElement';
import CategoryDetailsGridElement from '../../molecules/SC_categoryDetailsGridElement/categoryDetailsGridElement';



export default function SectionCategories(props) {

  
  const [category, setCategory] = React.useState(props.categoriesData[0]);
  const [search, setSearch] = React.useState(null);

  const setSearchValue = (val) => {
    setSearch(val)
  }

  const selectCateogrySearchBar = (newCategory) => {
    if(newCategory != null) {
      setCategory(newCategory)
    }
  }

  const selectCategory = (newCategory) => {
    if(newCategory != null) {
      setSearch(null)
      setCategory(newCategory)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className={props.sectionClass + " central-categories-section-container"} style={{ display: props.initialDisplay }}>
      {/* Griglia in cui sistemare gli elementi */}
      <Grid container spacing={3} className="grid-container-categories-custom">

        {/* Titolo della sezione */}
        <SectionTitle sectionName={props.sectionName} />

        {/* Barra di ricerca */}
        <SearchBarGridElement selectCategory={selectCateogrySearchBar} data={props.categoriesData} search={search} setSearch={setSearchValue} />

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