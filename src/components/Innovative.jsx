import React from 'react'
import mobile from "../images/mobile.jpg";
import proven from "../images/proven.jpg";
import { Container, Row, Col } from 'react-bootstrap';

export default function Innovative() {
    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <img src={proven} alt='images' width={570} height={400} />
                    </Col>
                    <Col>
                        <h1 className='pt-4' style={{ color: "#57468b" }}>Innovative Technology</h1>
                        <p>Check out the latest versions of out models,</p>
                        <button className='btn btn-orange'>Read More</button>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <h1 className='pt-4' style={{ color: "#57468b" }}>Technical Features</h1>
                        <p>Archeticture</p>
                        <p>Development</p>
                        <p>Interface</p>
                        <button className='btn btn-orange'>Read More</button>
                    </Col>
                    <Col>
                        <img src={mobile} alt='images' width={500} height={400} />
                    </Col>
                </Row>
            </Container>
            <Container className='py-5'>
                <Row>
                    <p>We Are Technology Solutions gives Internet and also Application Advancement throughout the globe with a highly seasoned network of software application programmers, graphics developers and copywriters. We are a Katy, Texas-based company that also offers remote or on-site tech support, set up services, and IT seeking advice from for the Katy and also Greater Houston region. If you have a Modern technology need, call us to locate a service. What's your opinion of Website Design Template Gadget site?</p>
                </Row>
            </Container>
        </>
    )
}
