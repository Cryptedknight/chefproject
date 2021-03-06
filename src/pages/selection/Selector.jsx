import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete';
import Logout from '../../global_components/logout/Logout'
import './selector.css'
import { withRouter } from 'react-router-dom';
import axios from "axios";

const contests = require('../../contests');

const data = {
    authorizationURL: 'https://api.codechef.com/oauth/authorize',
    tokenURL: 'https://api.codechef.com/oauth/token',
    clientID: '60e0bcc7d1c6506e92e0f20fd65592c5',
    clientSecret: 'b981abbde443dd0fd726d93009db9e81',
    callbackURL: 'https://code-int-ud.herokuapp.com/select',
    //userProfileURL: 'https://api.codechef.com/users/me'
  }

class Selector extends Component {
    constructor(props) {
      super(props);
        this.state = {
            results : [],
            isContestCodeSelected: 0,
            problem_id : "Enter Problem Code",
            value: "",
            item:{},
        }
        this.getauthtoken = this.getauthtoken.bind(this);
        this.getaccesstoken = this.getaccesstoken.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.fetchdata = this.fetchdata.bind(this);
    }

    onRadioChange() {
        let c = this.state.isContestCodeSelected ^ 1
        this.setState({
            isContestCodeSelected : c
        })
    }


    
    
    getauthtoken(){
        var urlobj = new URL(window.location.href);
        var authtoken = urlobj.searchParams.get('code');
        console.log("auth",authtoken);
        localStorage.setItem('auth',authtoken);
        var authh = (localStorage.getItem('auth'));
        console.log("this auth",authh);
    }
    onTextChange(evt){
        this.setState({
          problem_id : evt.target.value
        })
    }

    onButtonClick(){
        //Make a request for the stored problem id according to the radio button selected
        // console.log(this.state.value);
        if(contests.result.data.content.contestList.indexOf(this.state.item) > -1)
        {
            if(this.state.item.code===this.state.value || this.state.item.name===this.state.value)
            {
                this.props.history.push(`/contest/${this.state.item.code}`)
            }
        }
    }


    getaccesstoken(){
        console.log(data.tokenURL);
        var mydata = {
            grant_type: 'authorization_code',
            code: localStorage.getItem('auth'),
            client_id: data.clientID,
            client_secret: data.clientSecret,
            redirect_uri: data.callbackURL
        }
        fetch(data.tokenURL,
            {
                method: 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(mydata)
            }).then(function(resp){
                return (resp.json());
            }).then(function(da){
                localStorage.setItem("access",da.result.data.access_token);
                localStorage.setItem("refresh",da.result.data.refresh_token);
                console.log("da",da.result.data.access_token);
            }).then(this.fetchdata());
      
        
    }

    fetchdata(){
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization",localStorage.getItem("access"));
    //myHeaders.append("Cookie", "PHPSESSID=4b23ed2910ffdbd15ef6c75ed78d2c01");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://api.codechef.com/contests/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    }
    
    componentDidMount(){
        //console.log("here",this.props.match.params);
        this.getauthtoken();
        this.getaccesstoken();
        //this.fetchdata();
        //console.log("this")
    }

    render() {
        
       let radio_buttons = 
       <div>
           <input type="radio" value="contest-name" checked={!this.state.isContestCodeSelected} onChange={this.onRadioChange}/>
            Contest Name
           <input type="radio" value="contest-code" checked={this.state.isContestCodeSelected} onChange={this.onRadioChange}/>
           Contest Code
       </div>;

        return (
            <>
                <div className="searchbar">
                    {radio_buttons}
                    {/* <input type="text" value= {this.state.problem_id} onChange = {this.onTextChange} /> */}
                    <Autocomplete
                        getItemValue={(item) => this.state.isContestCodeSelected?item.code:item.name}
                        items={contests.result.data.content.contestList}
                        renderItem={(item, isHighlighted) =>
                            this.state.isContestCodeSelected?
                                (item.code.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1 ?
                                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                    {item.code}
                                </div> : <div></div>):
                                (item.name.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1 ?
                                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                    {item.name}
                                </div> : <div></div>)
                        }
                        value={this.state.value}
                        onChange={(e) => this.setState({value: e.target.value})}
                        onSelect={(val,item) => this.setState({value: val,item: item})}>
                    </Autocomplete>
                    <button className = "button" onClick = {this.onButtonClick.bind(this)}>Open</button>
                </div>
                <div className="logout">
                    <Logout />
                </div>
            </>
        );
    }
}
export default withRouter(Selector);