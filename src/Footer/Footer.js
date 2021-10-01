import React, { Component } from 'react'
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'
export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>2021
                    <FontAwesomeIcon icon={faCopyright}/>
                    by : <span>ENAS ZAID</span>
                </p>
            </div>
        )
    }
}

export default Footer
