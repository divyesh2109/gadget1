import React from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import g1 from '../images/gallery00.jpg';
import g2 from '../images/gallery01.jpg';
import g3 from '../images/gallery02.jpg';
import g4 from '../images/gallery03.jpg';
import g5 from '../images/gallery04.jpg';
import g6 from '../images/gallery05.jpg';
import g7 from '../images/gallery06.jpg';
import g8 from '../images/gallery07.jpg';

export default function gallery() {
    return (
        <Container fluid>
            <Row className='d-flex'>
                <Col md={3} className='p-0'>
                    <Image src={g1} className="w-100" />
                </Col>
                <Col md={3} className='p-0'>
                    <Image src={g2} className="w-100" />
                </Col>
                <Col md={3} className='p-0'>
                    <Image src={g3} className="w-100" />
                </Col>
                <Col md={3} className='p-0'>
                    <Image src={g4} className="w-100" />
                </Col>
                <Col md={3} className='p-0'>
                    <Image src={g5} className="w-100" />
                </Col>
                <Col md={3} className='p-0'>
                    <Image src={g6} className="w-100" />
                </Col>
                <Col md={3} className='p-0'>
                    <Image src={g7} className="w-100" />
                </Col>
                <Col md={3} className='p-0'>
                    <Image src={g8} className="w-100" />
                </Col>
            </Row>
        </Container>
    )
}
