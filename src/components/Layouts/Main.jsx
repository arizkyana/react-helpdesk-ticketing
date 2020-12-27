import {
    Container,
} from 'react-bootstrap';
import NavbarComponent from '../Navbar';

const useMain = (WrappedComponent) => {
    return (
        <>
            <NavbarComponent />
            <Container style={{ paddingTop: '60px' }}>
                <WrappedComponent />
            </Container>
        </>
    )
};

export default useMain;
