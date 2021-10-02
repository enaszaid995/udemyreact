import axios from 'axios';
import React, { Component } from 'react'
import { Container, Row ,Col ,Card, Button} from 'react-bootstrap'
import '../App.css'
import "animate.css"

import {Rating, Typography} from '@mui/material';

import { Link } from 'react-router-dom'

export class Web extends Component {
    state ={
        courses:[]
    }
    componentDidMount(){
        
        axios.get('data/data.json')
        .then(res =>{
           
            let result=[];
            res.data.courses.forEach((req) => {
            
                if (req.Field === 'web') {
                    result.push(req);
                }
                })
                this.setState({courses:result}); 
    
        })
    }
    render() {
        return (
            <div>
                
                <Container>
                    
                    <Row>
                       <h3 className="animate__animated animate__backInLeft">
                              Web Courses :   
                       </h3> 
                     
                    </Row>
                    
                    
                    <Row className="LastCourse">
                    {this.state.courses.map(c =>(
                         <Col lg={3} md={4} sm={12} className="cardlast animate__animated  animate__zoomIn" >
                         <Card style={{ width: '18rem' , marginLeft:'50px'}} key={c.id}>
                     <Card.Img variant="top" src="logo192.png" />
                     <Card.Body>
                         <Card.Title>{c.title}</Card.Title>
                         <Card.Subtitle className="mb-2 text-muted">{c.Auther}</Card.Subtitle>
                         <Typography component="legend">Reviews</Typography>
                         <Rating name="read-only" value={parseInt(c.Rate)} readOnly />
                        
                         <Card.Text>
                         {c.Desc}
                         </Card.Text>
                         
                             <Link to={'/Course/'+c.id}>
                             <Button variant="outline-info" style={{  marginLeft:'5px'}} >
                                 Details
                             </Button>
                             </Link>
     
                             <Link to='/Cart/{c.id}'>
                             <Button  variant="outline-success"  style={{  marginLeft:'5px'}}>
                                 ADD TO CART
                             </Button>
                             </Link>
                        
                     </Card.Body>
                     </Card>
                     </Col>
                    ))}
                   
                        
                    </Row>
                </Container>
               
            </div>
        )
    }
}

export default Web
