import React, { Component } from 'react'
import './out.css';
import {Redirect} from "react-router-dom";

export default class Logout extends Component {

    constructor(props){
        super(props);
        this.logmeout = this.logmeout.bind(this);
    }

    logmeout(){
        return <Redirect to = "/" />
    }

    render() {
        return (
            <div>
                <button id="logout" onClick = {this.logmeout}>Logout</button>
            </div>
        )
    }
}
