import React from 'react'
// import fetch from 'cross-fetch';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import './searchBarGridElement.scss'

export default function SearchBarGridElement(props) {
    //  Boolean per vedere se è aperto il box delle opzioni
    const [open, setOpen] = React.useState(false);
    // Sono le opzioni
    const [options, setOptions] = React.useState([]);
    // Per vedere se sta caricando o no
    const loading = open && options.length === 0;

    // Categoria scelta 
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');



    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            //const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
            //console.log(response)
            // await sleep(1e3); // For demo purposes.
            // data = await response.json();

            const data = props.data;

            if (active) {
                console.log("SONO ATTIVO")
                setOptions(data);
            }
        })();

        return () => {
            console.log("ACTIVE E' FALSO")
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);


    return (
        <Grid item className="search-bar-grid-element">
            <Autocomplete
                className="search-bar-categories"
                value={props.search}
                onChange={(event, newValue) => {
                    props.setSearch(newValue);
                    props.selectCategory(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="asynchronous-demo"
                style={{ width: 300 }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                // getOptionSelected={(option, value) => {option.name === value.name}}
                getOptionLabel={(option) => option.name}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search category..."
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />
        </Grid>
    )
}