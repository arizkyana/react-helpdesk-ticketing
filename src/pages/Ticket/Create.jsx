import React from 'react';
import useMain from '../../components/Layouts/Main';

import TicketCreateContainer from '../../containers/Ticket/Create';

const TicketCreatePage = () => {
    return useMain(TicketCreateContainer);
};

export default TicketCreatePage;
