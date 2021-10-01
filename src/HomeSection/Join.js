import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap'
import '../App.css'
export class Join extends Component {
    render() {
        return (
            <Container>
                <div className="join">
                <div className="head">
                    <h3>Our Team</h3>
                    <p>
                        If you have the skills in required field and experince 
                        we will be happy to be one of us.
                    </p>
                    <Button variant="danger" size="lg">JOIN</Button>
                </div>
                <div className="imgjoin">
                    <img src="Images\join.jpg" alt="Join team" width="90%"/>
                </div>
            </div>
            </Container>
        )
    }
}

export default Join
