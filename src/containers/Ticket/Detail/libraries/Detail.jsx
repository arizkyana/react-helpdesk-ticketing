import {
    Breadcrumb, Button, Card,
} from 'react-bootstrap';

import {
    useParams,
} from 'react-router-dom';

const Detail = () => {
    let { id } = useParams();
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Ticket</Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {id}
                </Breadcrumb.Item>
            </Breadcrumb>
            <Card>
                <Card.Header as="h5">Ticket ID : {id}</Card.Header>
                <Card.Body>
                    <Card.Title>Kerusakan Printer</Card.Title>
                    <Card.Text>
                        Printer rusak di ruangan HRD
                    </Card.Text>
                    <Button variant="primary">Reply</Button>
                    <Button variant="danger" style={{ marginLeft: '1rem' }}>Close</Button>
                </Card.Body>
            </Card>
        </>
    )
};

export default Detail;
