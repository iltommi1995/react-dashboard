import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './mostViewedTable.scss'

const columns = [
    { id:'id', label: 'N.'},
    { id: 'title', label: 'Page\u00a0title'},
    { id: 'views', label: 'Views'}
];

export default function MostViewedTable(props) {
    return(
        <TableContainer className={"table-container-custom"}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.data.map(row => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {
                                            columns.map((column) => {
                                                let value = row[column.id];
                                                return (
                                                    <TableCell key={column.id}>
                                                        {column.id === 'title' ? <a href={row["url"]} target="_blank" rel="noreferrer">{value}</a> : value}
                                                    </TableCell>
                                                );
                                            })

                                        }
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
    )
}