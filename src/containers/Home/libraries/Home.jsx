import React from 'react';

import {
  Button,
} from 'react-bootstrap';

import {
  Link,
} from 'react-router-dom';

import TableTickets from '../../../components/TableTickets';

const HomeContainer = () => {

  return (
    <React.Fragment>
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <Link to="/ticket/create">
          <Button variant="primary">Create new ticket</Button>
        </Link>
      </div>
      <section>
        {/* Table Component */}
        <TableTickets />
        {/* /Table component */}
      </section>
    </React.Fragment>
  )
};

export default HomeContainer;
