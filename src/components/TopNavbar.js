// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png';
import userlogo from './userlogo.png';
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
                    <Nav.Link href="#">
                        <img
                            src={userlogo}
                            width="30"
                            height="30"
                            className="roundedCircle"
                            alt="WOSA"
                        />
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default TopNavbar;