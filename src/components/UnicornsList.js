import React from "react";
import {Unicorn} from './Unicorn';
import { unicornsApi } from "../rest/UnicornsApi";


export class UnicornsList extends React.Component {
    state = {  // The state is not a constructor here, it's created as an object
        unicorns: []  // This state will be an array of unicorns
    };

    componentDidMount() {
        this.fetchUnicorns();  // fetchUnicorns will be an async function w/ no parameters
    }                           //  because we're just grabbing all unicorns

    fetchUnicorns = async() => {
        const unicorns = await unicornsApi.get();
        console.log('unicorns list:', unicorns);
        this.setState({unicorns}); // State will be value that comes back from Api
    }

    updateUnicorn = async(updateUnicorn) => { // This async WILL take an arguement
        await unicornsApi.put(updateUnicorn); // Passing in updated unicorn
        this.fetchUnicorns(); // Calling method to update state w/ new unicorns
    };

    render() {
        return (
            <div>
                {this.state.unicorns.map((unicorn) => (
                    <Unicorn
                        unicorn = {unicorn}
                        key = {unicorn._id}
                        updateUnicorn = {this.updateUnicorn}
                    />    
                ))}
            </div>
        )
    }
}