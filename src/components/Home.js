import React, { Component } from 'react';
//import { logout, isLogin } from '../utils';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: false
        }
    }

    handleLogout = () => {
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                <h1>Codechef demo webapp</h1>

                {this.state.isLogin ? 
                    <button onClick={() => this.handleLogout()}>Click here to log out</button>
                    : <Link to="/login">Go to login in page</Link>
                }
            </div>
        );
    }
}

export default Home;