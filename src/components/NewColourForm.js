import React, {useState} from 'react';

export const NewColourForm = (props) => {
    const [colour, setColour] = useState('');  // Set state to empty string to begin    
    
        // Now we define what happens when we submit the form
    const onSubmit = (e) => {
        e.preventDefault();
        if (colour) {
            props.addNewColour(colour);  // Calling addNewColour on props being passed into it
            setColour('')  // After completion, set back to empty string
            
        } else {
            console.log('invalid colour input');
        }
    };

    return (
        <div>
            <h4>Add color</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='color'
                    onChange={(e) => setColour(e.target.value)}
                    value={colour}
                />
                
                <button className='btn btn-primary' type='submit'>Add Color</button>
            </form>
        </div>
    )
};