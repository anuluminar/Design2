import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/real-estate-house.png'


function Nav() {
    return (
        <>
            <Navbar className="">
                <Container>
                    <Navbar.Brand href="#home" style={{height: "100px"}}>
                        <img src={icon} alt="" width="100" height="100"
                            className="d-inline-block align-top" />
                    </Navbar.Brand>

                    <Navbar.Collapse className="d-flex align-items-center justify-content-center">
                        <Navbar.Text>

                            <h5>XYZ SYSTEM LLP.</h5>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container> 

                

            </Navbar>
        </>
    )
}

export default Nav