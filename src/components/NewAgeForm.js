import React, {useState} from 'react';

export const NewAgeForm = (props) => {
    
    const [age, setAge] = useState(''); // Set to empty string
    const handleAgeInput = (e) => {  
        const int = parseInt(e.target.value, 10);
        setAge(int >= 0 ? int:'');  // This ensures that age will be a number
    }
        // Now we define what happens when we submit the form
    const onSubmit = (e) => {
        e.preventDefault();
        if (age) {
            props.addNewAge(age);  // Calling addNewAge on props being passed into it
            
            setAge('')  // After completion we set back to empty string
        } else {
            console.log('invalid age input');
        }
    };

    return (
        <div className='row'>
            <h4>Add age</h4>
            <form onSubmit={onSubmit}>
                
                <input  // Our input text box
                    type='text'
                    placeholder='age'
                    onChange={handleAgeInput}
                    value={age}
                />
                <button className='btn btn-primary' type='submit'>Add age</button>
            </form>
        </div>
    )
};

// export const NewFeatureForm = (props) => {
//     const [colour, setColour] = useState('');
//     const [age, setAge] = useState(undefined);
//     const handleAgeInput = (e) => {
//         const int = parseInt(e.target.value, 10);
//         setAge(int >= 0 ? int:'');
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         if (colour && age) {
//             props.addNewFeature({colour, age});
//             setColour('')
//             setAge('')
//         } else {
//             console.log('invalid input');
//         }
//     };

//     return (
//         <div>
//             <h4>Add new feature</h4>
//             <form onSubmit={onSubmit}>
//                 <input
//                     type='text'
//                     placeholder='color'
//                     onChange={(e) => setColour(e.target.value)}
//                     value={colour}
//                 />
//                 <input
//                     type='text'
//                     placeholder='age'
//                     onChange={handleAgeInput}
//                     value={age}
//                 />
//                 <button type='submit'>Add Feature</button>
//             </form>
//         </div>
//     )
// };
