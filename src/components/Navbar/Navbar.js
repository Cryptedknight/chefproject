import React from 'react';
import styles from './Navbar.module.css';
import logo from "../../assets/codechef.png";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <nav className={styles.Nav}>
      <div><img src={logo} alt="logo" className={styles.logo} /></div>
      <div className={styles.routes}>
        <div>
          <Link to="/">Home</Link>
          </div>
        <div>Something Here</div>
        <div className="button">Login/Signup</div>
      </div>
    </nav>
  );
}

export default Navbar;
