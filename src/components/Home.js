import React, { Component } from 'react';
//import { logout, isLogin } from '../utils';
import Login from "./loginpage";

class Home extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         isLogin: false
    //     }
    // }

    // handleLogout = () => {
    //     this.setState({
    //         isLogin: false
    //     })
    // }

    render() {
        return (
            <div>
                <h1>Codechef demo webapp</h1>
                <Login/>

            </div>
        );
    }
}

export default Home;