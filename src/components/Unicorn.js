import React from 'react';
import {NewAgeForm} from './NewAgeForm';
import {NewColourForm} from './NewColourForm';


// This will be a functional component
export const Unicorn = (props) => {
    const {unicorn, updateUnicorn} = props;  // Deconstructing the props

    const deleteUnicorn = () => {
    //     const updatedUnicorn = {
    //         setUnicorns(current =>
    //             current.filter((x) => x.id !== unicornId);
    //             updateUnicorn(updatedUnicorn);
    //             })
            
    //     }; // Passing the updated unicorn into the updateUnicorn method
        
    }

    const addNewAge = (age) => updateUnicorn({...unicorn, age});

    
    //
    // const age = () => (
    //     <ul>
    //         {unicorn.age.map((unicorn, index) => (
    //             <li key={index}>
    //                 <label> {`Age: ${unicorn.age}`}</label>
    //                 {/* <button onClick={(e) => deleteUnicorn(unicorn._id)}>DELETE</button> */}
    //             </li>
    //         ))}
    //     </ul>
    // );

    const addNewColour = (colour) => updateUnicorn({...unicorn, colour});

    // const colour = () => (
    //     <ul>
    //         {unicorn.colour.map((unicorn, index) => (
    //             <li key={index}>
    //                 <label> {`Color: ${unicorn.colour}`}</label>
    //                 {/* <button onClick={(e) => deleteAge(age._id)}>DELETE</button> */}
    //             </li>
    //         ))}
    //     </ul>
    // );
    // deleteUnicorn (e, unicorn) {
    //     const index = unicorn.indexOf(unicorn);
    //     unicorn.splice(index, 1);
    //     updateUnicorn(unicorn)
    //         .then(() => {
    //             this.setState(state => {
    //                 for (let u of state.unicorns) {
    //                     if(u.id === unicorn.id) {
    //                         let u = unicorn;
    //                         break;
    //                     }
    //                 }
    //                 return state;
    //             });
    //         });
    //         preventDefault();
    // }

    return (
        <div className='container'>
            <h1>{unicorn.name}</h1>
            <span>
            <h5>Age: {unicorn.age}</h5>
            <button onClick={(e) => deleteUnicorn(unicorn.id)}>DELETE</button>
            </span>
            <h5>Color: {unicorn.colour}</h5>
            {/* {
                age({age, unicornId: unicorn._id})
            } */}
            <NewAgeForm addNewAge = {addNewAge} />
            <NewColourForm addNewColour = {addNewColour} />
        </div>
    );
};   

// export const Unicorn = (props) => {
//     const {unicorn, updateUnicorn} = props;  // Deconstructing the props

//     const deleteFeature = (featureId) => {
//         const updatedUnicorn = {
//             ...unicorn,
//             features: unicorn.features.filter((x) => x._id !== featureId)
//         }; // Passing the updated unicorn into the updateUnicorn method
//         updateUnicorn(updatedUnicorn);
//     }

//     const addNewFeature = (feature) => updateUnicorn({...unicorn, features: [...unicorn.features, feature]});
//     //
//     const features = () => (
//         <ul>
//             {unicorn.features.map((feature, index) => (
//                 <li key={index}>
//                     <label> {`${feature.colour} Age: ${feature.age}`}</label>
//                     <button onClick={(e) => deleteFeature(feature._id)}>DELETE</button>
//                 </li>
//             ))}
//         </ul>
//     );

//     return (
//         <div>
//             <h1>{unicorn.name}</h1>
//             {
//                 features({features, unicornId: unicorn._id, deleteFeature})
//             }
//             <NewFeatureForm addNewFeature = {addNewFeature} />
//         </div>
//     );
// };   