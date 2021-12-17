import React, { useState,useEffect } from 'react';
import MaterialProvider from '../Pages/MaterialProvider';
import Aux from '../../../Auxiliary/Auxiliary';

const MaterialProvider = () => {
    
    const [checkData,setCheckData] = useState([]);

    const [register,setRegister] = useState(false);

    const callData = async () =>{
        try
        {
            const res = await fetch('/getReg', {
                method: "GET",
                headers:{
                    Accept:"application/json",
                    
                    "Content-Type":"application/json "
                }
            });

            const data = await res.json();
            console.log(data);
            setCheckData(data);
        
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(()=>{
        callData();
        console.log(checkData);
    });
    
    return(
        <Aux>
            <MaterialProvider  checkData={checkData} register={register}/>
        </Aux>
        
    )
    
}

export default MaterialProvider;