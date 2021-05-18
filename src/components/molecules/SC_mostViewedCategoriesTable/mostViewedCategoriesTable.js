import React from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import GridElementTitle from "../../atoms/gridElementTitle/gridElementTitle"

import './mostViewedCategoriesTable.scss'

const columns = [
    { id: 'name', label: 'Category\u00a0name' },
    { id: 'pageNumber', label: 'Pages' },
    { id: 'views', label: 'Views' },
];

export default function MostViewedCategoriesTable(props) {
    let cat = JSON.parse(JSON.stringify(props.data))
    console.log("Questo è cat")
    console.log(cat)
    return(
        <Paper
                sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}
                className="paper-custom"
            >
                <GridElementTitle children="Most viewed categories" />
                <TableContainer className={"most-viewed-categories-grid-container"}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        className="table-cell-header-custom"
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cat.map(row => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} style={{cursor:"pointer"}} onClick={() => {props.selectCategory(row)}}>
                                        {
                                            columns.map((column) => {
                                                let value = row[column.id];

                                                if (column.id === "name") {
                                                    return (
                                                        <TableCell key={column.id} className="table-cell-custom" >
                                                            {value}
                                                        </TableCell> 
                                                        
                                                    );
                                                }
                                                else {
                                                    return (
                                                        <TableCell key={column.id} className="table-cell-custom">
                                                            {value}
                                                        </TableCell> 
                                                    );
                                                }
                                            })
                                        }
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
    )
}