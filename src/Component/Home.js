import React, { Component } from 'react'
import Slider from '../HomeSection/Slider'
import LastCourses from '../HomeSection/LastCourses'
import About from '../HomeSection/About'
import Join from '../HomeSection/Join'

export class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <About/>
                <LastCourses/>
                <Join/>
                
            </div>
        )
    }
}

export default Home
