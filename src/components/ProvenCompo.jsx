import React from 'react'
import proven from "../images/proven.jpg";
import mobile from "../images/mobile.jpg";
import { Container, Row, Col } from 'react-bootstrap';

export default function ProvenCompo() {
    return (

        <>
            <div style={{ backgroundColor: '#f2f6ff' }} className='py-5'>
                <Container>
                    <Row className='align-items-center'>
                        <Col>
                            <img src={proven} alt='images' className='img-shadow' width={600} height={400} />
                        </Col>
                        <Col>
                            <h1 className='pt-4'>Proven Product Range</h1>
                            <p>Our products are very popular among yang people. We always have only positive feedbacks. The quality is absolutely positive.</p>
                            <button className='btn btn-orange'>Read More</button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='py-5'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={4}>
                            <h1 className='pt-4'>Reliable suppliers</h1>
                            <p>We collaborate with our suppliers for 5 years. There was never any delay. Our suppliers have an international certificate that shows their reliability.</p>
                            <button className='btn btn-blue'>Read More</button>
                        </Col>
                        <Col md={8} className='d-flex justify-content-end position-relative'>
                            <img src={proven} alt='images' className='img-shadow ' width={500} height={300} />
                            <img src={mobile} alt='images' className='img-shadow position-absolute mobile-img' width={280} height={350} />
                        </Col>
                    </Row>
                    <Row style={{paddingTop:"200px"}}>
                        <Col>100% Fulfillment Assured. You can anticipate as demand complete contentment from the information technology and technical solutions you obtain from Tech Inc Solutions. We promise to provide excellent service, on-time as well as within your budget plan. What do you think of Website Design Template?
                        </Col>
                        <Col>
                        Super Rapid Services. We provide remote support solutions for computer system fixing concerns so you don't need to await a service technician to turn up. If we are not able to fix it remotely, we will certainly dispatch a service technician at a time that is practical for you. Website Design Template is one of Mobirise's best themes.
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
