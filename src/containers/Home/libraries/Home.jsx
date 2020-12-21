import React from 'react';

import {
  Container,
  Button,
  Table,
  Pagination,
} from 'react-bootstrap';

import Navbar from '../../../components/Navbar';

const HomeContainer = () => {
  return (
    <>
      <Navbar />
      <Container style={{ paddingTop: '60px' }}>
        <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
          <Button variant="primary">Create new ticket</Button>
        </div>
        <section>
          {/* Table Component */}
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
          {/* /Table component */}
        </section>
      </Container>
    </>
  )
};

export default HomeContainer;
