import React, { Component } from 'react'
import Logout from '../../global_components/logout/Logout'
import Timer from '../../global_components/timer/Timer'
// import TabController from './tab_controller/TabController'
import RecentActivity from './recent_activity/RecentActivity'
import Tabs from '../../global_components/tab_controller/Tabs'
import Leaderboard from './leaderboard/Leaderboard'
import ProblemsDisplay from './problems_display/ProblemsDisplay'
import {withRouter} from 'react-router-dom';
import './contest.css'

var leaderboard = require('../../leaderboard');
var contest = require('../../contest');

class ContestPage extends Component {

    fetchdata = async endpoint =>{
        const response = await fetch(endpoint)
        console.log("this",response);
        const json = await response.json()
        console.log(json)
        this.setState({
            results : json
        });
    }
    options = {
        method : "GET",
        headers : {
            Authorization: '2908e5281a30749be4ba780da4ac5f57b831b94c',
            "Content-Type": "application/json",
        },
    }

    
    componentDidMount(){
        console.log(this.props.match.params.contestID);
        console.log("this")
        this.fetchdata("https://api.codechef.com/contests/",this.options)
    }
    render() {
        return (
            <>
                {/* Top Components */}
                
                <div className="contest_header_flex">
                    <div className="contest_header_content">
                        <div className="contest_name">{contest.result.data.content.name}</div> 
                        <div className="contest_code">Contest Code: {contest.result.data.content.code}</div>
                        <div className="timer"><Timer startDate={contest.result.data.content.startDate} endDate={contest.result.data.content.endDate} /></div>
                    </div>
                    <div className="logout">
                        <Logout />
                    </div>    
                </div>

                
                {/* TabController is rendered */}
                <div className="contest_container_flex">
                    <div className="tabs-container">
                        <Tabs>
                            <div label="Problems">
                                {/* Problems are displayed heres */}
                                <ProblemsDisplay leaderboard={leaderboard} contest={contest}/>
                            </div>
                            <div label="Leaderboard">
                                <Leaderboard leaderboard={leaderboard} contest={contest}/>
                            </div>
                        </Tabs>
                    </div>
                    <div className="recent-activity">
                        {/* Recent Activity is rendered */}
                        <RecentActivity />
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(ContestPage);