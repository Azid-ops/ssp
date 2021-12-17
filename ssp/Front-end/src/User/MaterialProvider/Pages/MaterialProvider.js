import React from "react";
import { NavLink } from "react-router-dom";
import Aux from "../../../Auxiliary/Auxiliary";
import Nav from "../../../Ui/Navbar/Nav";
import classes from './MaterialProvider.css';

const MaterialProviderPage = (props) =>{
    const myData = (dat) =>{
        if(dat.length === 0)
        {
            return(
                <h1>No Data to Preview</h1>
            )
        }
        else
        {

            return dat.map((post)=>{
                return <div className={classes.data}key={post._id}>
                    <li className={classes.myList}>
                        <div className={classes.candi}>
                            <div>
                                <p>Name: {post.cname}</p>
                                <br />
                                <p>Email: {post.email}</p>
                                <br />
                                <p>Location: {post.location}</p>
                                <br />
                                <p>Delivery: {post.delivery}</p>
                            </div>                      
                        </div>  
                    </li>
                </div>
            })
            
        }
    }
    return(
        <Aux>
            <Nav 
                first={"Home"}
                second={"Store"}
                third={"Home"}
                fourth={"About Us"}
            />
            <div className={classes.outer}>
                <div className={classes.inner}>
                    <h1>Material Providers: </h1>
                    {
                        myData(props.checkData)
                    }
                </div>
            </div>
        </Aux>
    )
}

export default MaterialProviderPage;