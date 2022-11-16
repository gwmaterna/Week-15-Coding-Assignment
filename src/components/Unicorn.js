import React, {useState} from 'react';
import { unicornsApi } from '../rest/UnicornsApi';
import {NewAgeForm} from './NewAgeForm';
import {NewColourForm} from './NewColourForm';


// This will be a functional component
export const Unicorn = (props) => {
    const {unicorn, updateUnicorn} = props;  // Deconstructing the props

    const deleteUnicorn = () => {
        console.log('test in delete')
        unicornsApi.delete(unicorn);
        updateUnicorn(unicorn);
    }

    
    const addNewAge = (age) => updateUnicorn({...unicorn, age});

   
    const addNewColour = (colour) => updateUnicorn({...unicorn, colour});

        
    return (
        <div className='container'>
            <div className='card' id='body'>
            <h1>{unicorn.name}</h1>
            <ul>            
            <li><h5>Age: {unicorn.age}</h5></li>              
            <li><h5>Color: {unicorn.colour}</h5></li>
            </ul>
            <NewAgeForm addNewAge = {addNewAge} />
            <NewColourForm addNewColour = {addNewColour} />
            <br />
            {/* <button className='btn btn-danger' onClick={(e) => deleteUnicorn(unicorn.id)}>Delete Unicorn</button> */}
            <button className='btn btn-danger' onClick={deleteUnicorn}>Delete Unicorn</button> 
            </div>  
        </div>
    );
};   

