import React, {useState} from 'react';

export const NewColourForm = (props) => {
    const [colour, setColour] = useState('');
    
    

    const onSubmit = (e) => {
        e.preventDefault();
        if (colour) {
            props.addNewColour(colour);
            setColour('')
            
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