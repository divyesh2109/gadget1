import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';

export default function Coutdown() {
    return (
        <Container className='py-5' style={{color:"#57468b"}}>
            <Row className='text-center'>
                <h1 className='pb-4'>Sale Countdown!</h1>
            </Row>
            <Row className='text-center'>
                <Col>
                    <h1>00</h1>
                    <h3>Days</h3>
                </Col>
                <Col>
                    <h1>00</h1>
                    <h3>Hours</h3>
                </Col>
                <Col>
                    <h1>00</h1>
                    <h3>Minutes</h3>
                </Col>
                <Col>
                    <h1>00</h1>
                    <h3>Seconds</h3>
                </Col>
            </Row>
        </Container>
    )
}
