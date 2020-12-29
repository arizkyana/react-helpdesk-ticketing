import React from 'react';

import HomePage from './pages/Home';
import TicketCreatePage from './pages/Ticket/Create';
import TicketDetailPage from './pages/Ticket/Detail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/ticket/create">
          <TicketCreatePage />
        </Route>
        <Route path="/ticket/:id">
          <TicketDetailPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
