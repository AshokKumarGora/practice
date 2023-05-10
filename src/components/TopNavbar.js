import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import { Badge, Button } from 'react-bootstrap';
function TopNavbar() {
    return (
        <>
            <Navbar bg="light" variant='light'>
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        width="50%"
                        className="d-inline-block align-top"
                        alt="Practice Portal - Western Overseas Study Abroad Pvt. Ltd."
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className='d-flex pull-right'>
                        <Nav.Link href="#deets">User: <b>Admin</b></Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
                <Nav className='d-flex pull-right'>
                    <Nav.Link href="/">
                    <Badge bg="primary">Welcome User</Badge>
                    </Nav.Link>
                    <Nav.Link href="/">
                        <Badge bg="success">Dashboard</Badge>
                    </Nav.Link>
                    <Button variant="outline-danger">Sign Out</Button>
                </Nav>
            </Navbar>
        </>
    );
}

export default TopNavbar;