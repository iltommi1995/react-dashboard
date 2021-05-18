import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './categoryDetailsMostViewedTable.scss'


const columns = [
    { id: 'pageName', label: 'Page\u00a0title'},
    { id: 'pageViews', label: 'Views'},
];

export default function CategoryDetailsMostViewedTable(props) {
    return (
        <TableContainer className="table-container-category-details">
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            className="table-cell-header-custom"
                        >
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {props.pagesData.map(row => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.pageId}>
                            {
                                columns.map((column) => {
                                    let value = row[column.id];
                                    return (
                                        <TableCell key={column.id} className="table-cell-custom">
                                            {column.id === 'pageName' ? <a href={row['pageUrl']} target="_blank" rel="noreferrer">{value}</a> : value}
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