import React from 'react';
import { Container, Row, Col,Card } from 'react-bootstrap'
import pic1 from '../images/fast.jpg';
import pic2 from '../images/responsive.png'
import pic3 from '../images/Intuitive.png'
import pic4 from '../images/Dynamic.jpg'
const InfoCards = () => {
    return (
        <div>
            <Container fluid="md" fluid="sm">
                <Row>
                    <Col lg={3}  md={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic1} />
                            <Card.Body>
                                <Card.Title>Fast</Card.Title>
                                <Card.Text>
                                Fast load times and lag free interaction, my highest priority.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}  md={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic2}/>
                            <Card.Body>
                                <Card.Title>Fast</Card.Title>
                                <Card.Text>
                                Fast load times and lag free interaction, my highest priority.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}  md={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic3}/>
                            <Card.Body>
                                <Card.Title>Fast</Card.Title>
                                <Card.Text>
                                Fast load times and lag free interaction, my highest priority.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic4}/>
                            <Card.Body>
                                <Card.Title>Fast</Card.Title>
                                <Card.Text>
                                Fast load times and lag free interaction, my highest priority.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default InfoCards
