import React, { Component } from 'react'
import { Container, Row ,Col ,Card, Button} from 'react-bootstrap'
import '../App.css'
import "animate.css"
import axios from 'axios'
import {Rating, Typography} from '@mui/material';
// get our fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

export class LastCourses extends Component {
    state ={
        courses:[]
    }
    componentDidMount(){
        axios.get('data/data.json')
        .then(res =>{
            console.log(res.data.courses);
            this.setState({courses:res.data.courses})
        })
    }
    render() {
       const lengthArr = this.state.courses.length;
       console.log(lengthArr)
       const x = lengthArr-1
       const y = lengthArr-2
       const z = lengthArr-3
       const c1=this.state.courses.map((cous) => {
        console.log(cous.id)
        
        if(cous.id == x){
            const rate = cous.Rate
            return(
                <Col lg={4} md={4} sm={12} className="cardlast animate__animated  animate__zoomIn" >
                    <Card style={{ width: '18rem' , marginLeft:'50px'}}>
                <Card.Img variant="top" src="logo192.png" />
                <Card.Body>
                    <Card.Title>{cous.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{cous.Auther}</Card.Subtitle>
                    <Typography component="legend">Reviews</Typography>
                    <Rating name="read-only" value={parseInt(cous.Rate)} readOnly />
                   
                    {/* <FontAwesomeIcon icon={faStar} className="checked"/> */}
                    <Card.Text>
                    {cous.Desc}
                    </Card.Text>
                    
                        <Link to='/{cous.Field}/{couse.id}}'>
                        <Button variant="outline-info" style={{  marginLeft:'5px'}}>
                            Details
                        </Button>
                        </Link>

                        <Link to='/Cart'>
                        <Button variant="outline-success"  style={{  marginLeft:'5px'}}>
                            ADD TO CART
                        </Button>
                        </Link>
                   
                </Card.Body>
                </Card>
                </Col>
                
            )
            
            }
            if(cous.id == y){
                const rate = cous.Rate
                return(
                    <Col lg={4} md={4} sm={12}  className="cardlast animate__animated  animate__zoomIn">
                        <Card style={{ width: '18rem' , marginLeft:'50px'}}>
                    <Card.Img variant="top" src="logo192.png" />
                    <Card.Body>
                        <Card.Title>{cous.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{cous.Auther}</Card.Subtitle>
                        <Typography component="legend">Reviews</Typography>
                        <Rating name="read-only" value={parseInt(cous.Rate)} readOnly />
                   
                        {/* <FontAwesomeIcon icon={faStar} className="checked"/> */}
                        <Card.Text>
                        {cous.Desc}
                        </Card.Text>
                        <Link to='/{cous.Field}/{couse.id}}'>
                        <Button variant="outline-info" style={{  marginLeft:'5px'}}>
                            Details
                        </Button>
                        </Link>

                        <Link to='/Cart'>
                        <Button variant="outline-success"  style={{  marginLeft:'5px'}}>
                            ADD TO CART
                        </Button>
                        </Link>
                    </Card.Body>
                    </Card>
                    </Col>
                    
                )
                
                }

                if(cous.id == z){
                    const rate = cous.Rate
                    return(
                        <Col lg={4} md={4} sm={12} className="cardlast animate__animated  animate__zoomIn">
                            <Card style={{ width: '18rem' , marginLeft:'50px'}}>
                        <Card.Img variant="top" src="logo192.png" />
                        <Card.Body>
                            <Card.Title>{cous.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{cous.Auther}</Card.Subtitle>
                            <Typography component="legend">Reviews</Typography>
                            <Rating name="read-only" value={parseInt(cous.Rate)} readOnly />
                   
                            {/* <FontAwesomeIcon icon={faStar} className="checked"/> */}
                            <Card.Text>
                            {cous.Desc}
                            </Card.Text>
                            <Link to='/{cous.Field}/{couse.id}}'>
                            <Button variant="outline-info" style={{  marginLeft:'5px'}}>
                                Details
                            </Button>
                            </Link>

                            <Link to='/Cart'>
                            <Button variant="outline-success"  style={{  marginLeft:'5px'}}>
                                ADD TO CART
                            </Button>
                            </Link>
                        </Card.Body>
                        </Card>
                        </Col>
                        
                    )
                    
                    }
       
    })
       
       
        
        return (
            <div>
                
                <Container>
                    
                    <Row>
                       <h3 className="animate__animated animate__backInLeft">
                              Our Courses :   
                       </h3> 
                     
                    </Row>
                    
                    
                    <Row className="LastCourse">
                    {c1}
                        
                        
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LastCourses
