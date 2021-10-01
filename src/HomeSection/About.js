import React from 'react'
import "animate.css"
import { Container, Row , Col } from 'react-bootstrap'
function About() {
    return (
        <div className="about">
            <Container>
                <Row>
                    <Col lg={12}>
                    <h3>Who I Am <span>?</span></h3>
                        <p>
                            Technology Company provide a marketing Language in  programming Language
                            in all fields which in demand. Web Development , Mopile Application and 
                            DeskTop programming.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
