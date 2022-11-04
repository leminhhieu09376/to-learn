import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const About = () => {
    return (
        <Container>
            <Row className='mt-5' style={{ marginRight: 0 }}>
                <Col className='text-center'>
                    <Button
                        variant='primary'
                        href='https://minhhiu.netlify.app/'
                        target="_blank"
                        size='lg'
                    >
                        Visit my Portfolio
                    </Button>

                </Col>

            </Row>


            <Navbar className='d-flex justify-content-center' expand="lg" >
                <NavDropdown className='mt-4 ' title="Some of my little projects" id="navbarScrollingDropdown" >
                    <NavDropdown.Item className='text-center' href="https://weather-app-danho.netlify.app/" target="_blank" >Mini weather app (React js)</NavDropdown.Item>
                    <NavDropdown.Item className='text-center' href="https://link-shortenner.netlify.app/" target="_blank">
                        Link Shortenner app (React js)
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className='text-center' href="https://first-milestone-project.netlify.app/" target="_blank">
                        Furniture selling app template (HTML, CSS, JS)
                    </NavDropdown.Item>
                    <NavDropdown.Item className='text-center' href="https://vnexpressclone.netlify.app/" target="_blank">
                        VnExpress home page clone (HTML, CSS, JS)
                    </NavDropdown.Item>
                    <NavDropdown.Item className='text-center' href="https://github.com/leminhhieu09376/Project/tree/bookStore" target="_blank">
                        Book Store by Java Spring MVC (Github)
                    </NavDropdown.Item>
                </NavDropdown>

            </Navbar>




        </Container>
    )
}

export default About