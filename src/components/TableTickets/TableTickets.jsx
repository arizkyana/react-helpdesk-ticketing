import React from 'react';

import {
    Table,
    Pagination,
    Button,
} from 'react-bootstrap';

const TableTickets = () => {
    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>TicketID</th>
                        <th>Title</th>
                        <th>Technician ID</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>T-001</td>
                        <td>Kerusakan Printer</td>
                        <td>TC-001</td>
                        <td>High</td>
                        <td>
                            <Button size="sm" variant="secondary">
                                Detail
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>T-001</td>
                        <td>Kerusakan Printer</td>
                        <td>TC-001</td>
                        <td>High</td>
                        <td>
                            <Button size="sm" variant="secondary">
                                Detail
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>T-001</td>
                        <td>Kerusakan Printer</td>
                        <td>TC-001</td>
                        <td>High</td>
                        <td>
                            <Button size="sm" variant="secondary">
                                Detail
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Pagination>
                    <Pagination.Item active={true}>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Item>4</Pagination.Item>
                    <Pagination.Item>5</Pagination.Item>
                </Pagination>
            </div>
        </>
    );
};

export default TableTickets;
