import React, { Component } from 'react'
import ImageSlider from './image_slider/ImageSlider'
//import LoginPage from './login/LoginPage'
import Login from '../../global_components/login/login';
export default class Home extends Component {
    render() {
        return (
            <>
                <div className="flexed">
                    <div><ImageSlider/></div>
                    <div>
                        <Login/>
                    </div>
                </div>
            </>
        )
    }
}
