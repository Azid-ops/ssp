//Importing React
import React from 'react';

//Importing css
import classes from './MaterialProvider.css';

//Importing Auxiliary Component
import Aux from '../../Auxiliary/Auxiliary';

const MaterialProvider = () =>{
    return(
        <Aux>
            <div className={classes.material}>
                <h1 className={classes.browse}>Browse Material Providers</h1>
                <p>Browse Material Provider of your need.</p>
                <p>Coming Soon.</p>
            </div>
        </Aux>
    )
}

export default MaterialProvider;