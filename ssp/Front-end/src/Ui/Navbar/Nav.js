import React from "react";

//Importing Aux Component
import Aux from "../../Auxiliary/Auxiliary";

//Importing Nav css file
import classes from './Nav.css';

//Importing NavLink
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return(
        <Aux>
            <div className={classes.container}>
                <h2 className={classes.service}>Service Seeking Pakistan</h2>
                <div className={classes.hireOut}>
                    <NavLink to="/register" className={classes.hire}>{props.first}</NavLink>
                    <NavLink to="/" className={classes.hire}>{props.second}</NavLink>
                    <NavLink to="/" className={classes.hire}>{props.third}</NavLink>
                    <NavLink to="/" className={classes.get}>{props.fourth}</NavLink>
                    <NavLink to="/login" className={classes.hire}>{props.fifth}</NavLink>
                </div>
                
            </div>
            
        </Aux>
    )
}

export default Nav;