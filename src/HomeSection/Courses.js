import React, { Component } from 'react'
import SingleCourse from '../Component/SingleCourse';

export class Courses extends Component {
    state ={
        courses:[]
    }
    componentDidMount(){
        axios.get('data/data.json')
        .then(res =>{
            console.log(res.data.courses);
        })
    }
    render() {
     
        return (
            <div>
                <SingleCourse coursess = {this.state.courses}/>
            </div>
        )
    }
}

export default Courses
