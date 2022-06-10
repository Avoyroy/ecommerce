import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Home from './Home';

const Navitem = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid className='container-flex'>
                    <Navbar.Brand href="#">Fashion Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/electronics">Electronics</Nav.Link>
                        </Nav>
                        <div className='buttons'>
                            <a href='' className='btn btn-outline-dark'>Login</a>
                            <a href='' className='btn mx-2 btn-outline-dark'>SignUp</a>
                            <a href='' className='btn mx-2 btn-outline-dark'>Cart</a>
                            {/* <select>
                            {Ndata && Ndata.map(function (item) {
                                return <option>{item.category}</option>
                            }
                            )}
                        </select> */}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Home /> */}

        </>


    )
}

export default Navitem;