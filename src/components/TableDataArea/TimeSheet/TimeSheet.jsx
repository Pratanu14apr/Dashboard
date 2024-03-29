import React from 'react'
import "./TimeSheet.css"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function TimeSheet() {
    const columns = [
        { id: 'name', label: 'Name', },
        { id: 'department', label: 'Department', },
        {
            id: 'company',
            label: 'Company',

        },
        {
            id: 'weekending',
            label: 'Week Ending',

        },
        {
            id: 'totalhours',
            label: 'Total Hours',

            align: "center"

        },
        {
            id: 'submittedat',
            label: 'Submitted At',

            align: 'center',


        },
        {
            id: 'status',
            label: 'Status',

            align: 'center',

        }
    ];

    function createData(name, department, company, weekending, totalhours, submittedat, status) {

        return { name, department, company, weekending, totalhours, submittedat, status };
    }

    const rows = [
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Rejected'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
        createData('John Doe', 'IT', "Rapid Tech", "10-Dec-2023", 40, '11-Jan-2024 01:01 AM', 'Pending'),
    ];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    return (
        <div>
            <p className='all'>All Timesheets</p>

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: "600" }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align} style={{ fontSize: 13 }}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : column.id === 'status' ? (
                                                                <div style={{ backgroundColor: value === 'Pending' ? '#fff0e1' : value === 'Rejected' ? '#ffebeb' : 'inherit', borderRadius: '10px', paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3 }}>
                                                                    {value}
                                                                </div>
                                                            ) : (
                                                                value
                                                            )}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </div>
    )
}

export default TimeSheet