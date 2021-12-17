import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Aux from "../../../../Auxiliary/Auxiliary";
import Nav from "../../../../Ui/Navbar/Nav";
import classes from './setting.css';

const SettingPage = (props) => {
    return(
        <Aux>
            <Nav 
                first={"Home"}
                second={"Store"}
                third={"About Us"}
                fourth={"Settings"}
            />
            <div className={classes.outer}>
                <h1 className={classes.reg}>Add your Material</h1>
                <div>
                    <form>
                        <input className={classes.my}  onChange={props.handleInput} name="cname" value={props.user.cname} placeholder="Enter your Company's Name"/>
                        <br />
                        <br />
                        <input className={classes.my}  onChange={props.handleInput} name="email" value={props.user.email} placeholder="Enter your Email"/>
                        <br />
                        <br />
                        <input className={classes.my}  onChange={props.handleInput} name="location" value={props.user.location} placeholder="Enter your Location"/>
                        <br />
                        <br />
                        <input className={classes.my}  onChange={props.handleInput} name="delivery" value={props.user.delivery} placeholder="Enter Yes if Delivery Option Available"/>
                        <br />
                        <br />
                        <input className={classes.my}  onChange={props.handleInput} name="image" value={props.user.image} placeholder="Enter Link of your Image"/>
                        <br />
                        <br />
                        {/* <input 
                            style={{display:"none"}} 
                            type="file" 
                            accept=".jpg,.png,.jpeg"
                            onChange={props.pickHandler} 
                        />

                        <div className={classes.image}>
                            <img src="" alt="Preview" ref={props.filePickerRef} onChange/>
                        </div>
                        <button type="button" onClick={props.pickImage}>Pick Image</button>
                        <br />
                        <br /> */}
                
                        <NavLink className={classes.register} onClick={props.PostData} to="#">
                            Register
                        </NavLink>
                    </form>
                </div>
            </div>
        </Aux>
    )
}
export default SettingPage;