import React from 'react'
import { Container, Row, Col,Card } from 'react-bootstrap'
import InfoCards from './InfoCards'

const About = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                  <h1 className="text-center p-4">ABOUT</h1>  
                    </Col>
                </Row>
            </Container>
            <InfoCards/>
        </div>
    )
}

export default About
