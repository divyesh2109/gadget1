import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function (props) {
    return (
        <Container>
            {/* <Row xs={1} md={3} className="g-1">
                    <Col key={idx}>
                        <Card>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                </div>
                                <div class="col-md-8">
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text>{description}</Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row> */}

            <Row style={{margin:"140px 0px 50px 0px", backgroundColor: 'black'}}>
                <Col>
                    <div className='cardSection'>
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "22px", }}>title</Card.Title>
                                <Card.Text style={{ fontSize: "18px" }}>description</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "22px", }}>title</Card.Title>
                                <Card.Text style={{ fontSize: "18px" }}>description</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "22px", }}>title</Card.Title>
                                <Card.Text style={{ fontSize: "18px" }}>description</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


// import React from "react";
// import { Row, Col, Button, Card, Container } from "react-bootstrap";
// import { FaEarthAfrica, FaArrowUpLong } from "react-icons/fa6";
// import { MdOutlineQuestionMark, MdOutlineSecurity } from "react-icons/md";
// import { HiUsers } from "react-icons/hi2";
// import { HiOutlineCurrencyDollar } from "react-icons/hi";

// function Cards() {
//     return (
//         <>
//             <Container>
//                 <Row className="pt-5 justify-content-center">
//                     <Col xs={10} className="card-font" >
//                         <h2>Our products are</h2>
//                     </Col>
//                     <Col className="card-btn">
//                         <Button>Start</Button>
//                     </Col>
//                 </Row>
//                 <div className="cards">
//                     <Row>
//                         <Col>
//                             <Card style={{ width: "25rem", border: "none" }}>
//                                 <FaEarthAfrica style={{ width: "50px", height: "50px", marginLeft: "10px" }} />
//                                 <Card.Body>
//                                     <Card.Title style={{ fontSize: "22px", }}>Global solutions</Card.Title>
//                                     <Card.Text style={{ fontSize: "18px" }}>
//                                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eligendi id impedit maxime necessitatibus nulla praesentium quasi.
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col>
//                             <Card style={{ width: "25rem", border: "none" }}>
//                                 <MdOutlineQuestionMark style={{ width: "50px", height: "50px", marginLeft: "10px" }} />
//                                 <Card.Body>
//                                     <Card.Title style={{ fontSize: "22px", }}>Global questions</Card.Title>
//                                     <Card.Text style={{ fontSize: "18px" }}>
//                                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eligendi id impedit maxime necessitatibus nulla praesentium quasi.
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col>
//                             <Card style={{ width: "25rem", border: "none" }}>
//                                 <FaArrowUpLong style={{ width: "50px", height: "50px", marginLeft: "10px" }} />
//                                 <Card.Body>
//                                     <Card.Title style={{ fontSize: "22px", }}>Level up</Card.Title>
//                                     <Card.Text style={{ fontSize: "18px" }}>
//                                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eligendi id impedit maxime necessitatibus nulla praesentium quasi.
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </div>
//                 <Row style={{ marginTop: "50px" }}>
//                     <Col>
//                         <Card style={{ width: "25rem", border: "none" }}>
//                             <HiUsers style={{ width: "50px", height: "50px", marginLeft: "10px" }} />
//                             <Card.Body>
//                                 <Card.Title style={{ fontSize: "22px", }}>Global person</Card.Title>
//                                 <Card.Text style={{ fontSize: "18px" }}>
//                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eligendi id impedit maxime necessitatibus nulla praesentium quasi.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card style={{ width: "25rem", border: "none" }}>
//                             <HiOutlineCurrencyDollar style={{ width: "50px", height: "50px", marginLeft: "10px" }} />
//                             <Card.Body>
//                                 <Card.Title style={{ fontSize: "22px", }}>Global cash</Card.Title>
//                                 <Card.Text style={{ fontSize: "18px" }}>
//                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eligendi id impedit maxime necessitatibus nulla praesentium quasi.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card style={{ width: "25rem", border: "none" }}>
//                             <MdOutlineSecurity style={{ width: "50px", height: "50px", marginLeft: "10px" }} />
//                             <Card.Body>
//                                 <Card.Title style={{ fontSize: "22px", }}>Global security</Card.Title>
//                                 <Card.Text style={{ fontSize: "18px" }}>
//                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eligendi id impedit maxime necessitatibus nulla praesentium quasi.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// }

// export default Cards;
