import React from 'react'
import { Col, Row, Container, Card, Image } from 'react-bootstrap';
import mobilecol from '../images/mobile-col.jpg'

export default function Card2() {
    return (
        <>
            <Container className='py-5'>
                <Row className='align-items-center'>
                    <Col>
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Row>
                                <Col sm={9} className='text-end'>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: "22px", }}>Newest Models
                                    </Card.Title>
                                        <Card.Text style={{ fontSize: "18px" }}>We always have the latest models of tech products.</Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col sm={3}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                </Col>
                            </Row>
                        </Card>
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "22px", }}>Active community</Card.Title>
                                <Card.Text style={{ fontSize: "18px" }}>In our community you would always find an answer and help in the issue you're experiencing.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "22px", }}>Big Projects</Card.Title>
                                <Card.Text style={{ fontSize: "18px" }}>You can always count on us in any project, you're going to make.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Image src={mobilecol} className='w-100' />
                    </Col>
                    <Col>
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "22px", }}>Clients Security</Card.Title>
                                <Card.Text style={{ fontSize: "18px" }}>We always care about our clients' security. Their information is very important to us</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "22px", }}>Multifunctional</Card.Title>
                                <Card.Text style={{ fontSize: "18px" }}>We would help you to cope with different issues, which could occur in your business.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "22px", }}>Market Analysis</Card.Title>
                                <Card.Text style={{ fontSize: "18px" }}>We're constantly analyzing and monitoring the market.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ backgroundColor: "#f2f6ff" }}>
                <Container className='py-5'>
                    <Row className='align-items-center'>
                        <Col>
                            <h1 className='px-5'>We choose the best deals for our customers</h1>
                        </Col>
                        <Col>
                            <p className='px-5'>We always provide our customers with the best products and occurring projects. Our customers could always ask for help or request extra information.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
