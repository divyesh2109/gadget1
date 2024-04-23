import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';

export default function Card2() {
    return (
        <Container className='py-5'>
            <Row className='align-items-center'>
                <Col>
                <h1>We choose the best deals for our customers</h1>
                </Col>
                <Col>
                <p>We always provide our customers with the best products and occurring projects. Our customers could always ask for help or request extra information.</p>
                </Col>
            </Row>
        </Container>
    )
}
