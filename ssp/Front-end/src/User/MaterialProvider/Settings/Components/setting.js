import { process_params } from "express/lib/router";
import React, {useState,useRef,useEffect} from "react";
import Aux from "../../../../Auxiliary/Auxiliary";
import SettingPage from "../Pages/setting";

const Setting = () => {

    const filePickerRef = useRef();
    const [file,setFile] = useState();
    const [preview,setPreview] = useState();
    const [isValid,setValid] = useState(false);
    useEffect(() => {
        if(!file)
        {
            return;
        }

        const fileReader = new FileReader();
    })
    const [user,setUser]=useState({
        //Initialzing name equal to Empty String
        cname:"",

        email:"",

        //Initialzing password equal to Empty String
        location:"",

        //Initialzing retype equal to Empty String
        delivery:"",

        image:""
    });

    //Creating Variable named name and value
    let name,value;

    //Creating handleInput Function
    const handleInput = (event) =>{

        //Getting name from Form and saving it into name variable
        name=event.target.name;

        //Getting value from Form and saving it into value variable
        value=event.target.value;

        //Changing State
        setUser({
            
            //Creating Copy of the state and giving value to each name
            ...user, [name]:value
        });
    }

    //Creating PostData function which will send requests to Node.js
    const PostData  = async (event) =>{

        console.log("Posting")
        //Cancelling default Events
        event.preventDefault();

        //Initializing user state value to email,name,password and retype
        const {cname, email, location, delivery, image} = user;

        //Sending Request to Node.js using Fetch API
        const final = await fetch("/UserRegister", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },

            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                cname,email, location,delivery,image
            })
        });
    }

    const pickImage = () => {
        filePickerRef.current.click();
    } 

    const pickHandler = (event) => {
        let pickedFile;
        let fileIsValid = isValid;
        if(event.target.files && event.target.files.length != 0)
        {
            const pickedFile = event.target.files[0];
            setFile(pickedFile);
            setValid(true);
            fileIsValid = true;
        }
        else
        {
            setValid(false);
            fileIsValid=false;
        }

        // onInput(id,pickedFile,fileIsValid);
    }

    return(
        <Aux>
            <SettingPage 
                user={user}  
                pickHandler={pickHandler}
                pickImage={pickImage} 
                handleInput={handleInput} 
                PostData={PostData} 
            />
        </Aux>
    )
}
export default Setting;