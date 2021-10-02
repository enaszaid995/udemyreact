import axios from 'axios';
import React ,{useState , useEffect}from 'react'
import { useParams } from 'react-router-dom'
import { Card,Container, Row ,Col , Button , ListGroup , ListGroupItem} from 'react-bootstrap'
import '../App.css'
import {Rating} from '@mui/material';
function SingleCourse() {
    const {a } = useParams()
    const [coursesList , setCourses] = useState([])
    useEffect(()=>{
        axios.get('/data/data.json')
        .then(res =>{ 
            
            setCourses(res.data.courses)
        })
        .catch(err =>{
            console.log(err);
        })
    })
    const CourseID=(x)=>{
        return coursesList.map((co)=>{
             if (co.id === x) {
               return <Container>
                  <Row className="singleCo" key={co.id}>
                      <Col lg={6} md={6} sm={12}>
                      <Card>
               <Card.Header as="h5">{co.Field} Section</Card.Header>
               <Card.Body>
                 <Card.Title>{co.title}</Card.Title>
                 <Card.Text>
                   {co.Desc}
                 </Card.Text>
                 
               </Card.Body>
              
                
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Auther :{co.Auther}</ListGroupItem>
                    <ListGroupItem>Price : {co.Price}</ListGroupItem>
                    <ListGroupItem>Rating:
                         <Rating name="read-only" value={parseInt(co.Rate)} readOnly />
                    </ListGroupItem>
                    <ListGroupItem>Field : {co.Field}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Button variant="success">ADD TO CART</Button>
                </Card.Body>
                
             </Card>
            
             </Col>
             <Col lg={6} md={6} sm={12}>
             <Card.Img variant="top" src="Images/Slider4.jpg" />
             </Col>
                  </Row>
               </Container>
            //    <li> {co.title}</li>
            }
        })}
            
    
        
    
    return (
        <div>
           {CourseID(a)} 
           
        </div>
    )
}

export default SingleCourse

