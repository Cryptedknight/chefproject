import React, { Component } from 'react'
import './out.css';
import {Link} from "react-router-dom";
export default class Logout extends Component {

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        return <Link to = "/" />
    }

    render() {
        return (
            <div>
                <Link to ="/">
                    Logout
                </Link>
                {/* <button id="logout" >Logout</button> */}
            </div>
        )
    }
}
