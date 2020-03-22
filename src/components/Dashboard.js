import React from 'react';
import Searchbox from './searchbox'
//import Timer from './timer'
//import styles from "./timer.css"
const Dashboard = () => {
    return (
        <div>
            <h1>
            Codecheffer's Dashboard
            </h1>
           <Searchbox/>
           {/* <div className={styles.timeStats}>
            <div id={styles.timeLeft}>Time left</div>
            <div id={styles.time}>
              <Timer />
            </div>
          </div> */}
        </div>
    );
};

export default Dashboard;