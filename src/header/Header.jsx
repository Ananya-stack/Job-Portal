import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" className='navbars'>
                                    <Container>
                                        <Navbar.Brand href="/" >JOB_PORTAL</Navbar.Brand>
                                        <Nav className="me-auto">
                                        </Nav>
                                        <Nav className="mr-auto">
                                        <button className='btn-primary'>
                                          <Nav.Link as={Link} to="/view" className='navbrands active'>Apply here!</Nav.Link>
                                        </button>
                                        </Nav>
                                    </Container>
                                </Navbar>
    </div>
  )
}
