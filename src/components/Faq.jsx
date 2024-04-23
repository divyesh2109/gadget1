import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'react-bootstrap';

export default function Faq() {
    return (
        <>
            <Container>
                <Row className='text-center'>
                    <h1 style={{ color: "#57468b" }}>Faq</h1>
                </Row>
                <Row>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h4>Why should you choose us?</h4>
                            </Accordion.Header>
                            <Accordion.Body>
                            100% Fulfillment Assured. You can anticipate and demand complete contentment from the information technology and technical solutions you obtain from Tech Inc Solutions. We promise to provide excellent service, on-time within your budget plan.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h4>How do we check suppliers? </h4></Accordion.Header>
                            <Accordion.Body>
                            A distributor is specified as the individual or company that gives services or product to one more organization. Discovering a trustworthy and competitively-priced provider is important to the success of our company. The terms that we bargain with your provider needs to be based on: the way that you pay the - financial institution draft, industrial expense paid for by the bank, foreign currency potential prices - management, taxation, transportation, basic settlements, and deals feasible threats - late settlement to a vendor, or defective, late or undelivered products. In Website Design Template you would find all you need for the succesful site creation.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <h4>What terms of delivery? </h4></Accordion.Header>
                            <Accordion.Body>
                            The terms that you discuss with your provider demand to be based upon: the manner in which you pay them - financial institution draft, business bill paid for by the bank, international currency prospective expenses - management, taxation, transport, general settlements, and purchases possible risks - late payment to a vendor, or faulty, late or undelivered items
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <h4>Why we have the best prices? </h4></Accordion.Header>
                            <Accordion.Body>
                            We have the chance to grow your data source with every sale - this indicates more people to link and construct relationships with. If they like what we do, this is most likely to lead to further sales. One way to do this is to use a motivation for them to contact us. Whould you like to try Website Design Template?
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
        </>
    )
}