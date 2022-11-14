import React, {Component} from 'react';  // Instead of React.Component, we can deconstruct
import {UnicornsList} from './UnicornsList';


export default class App extends Component {
    render() {
        return (
            <div className='main'>
                <UnicornsList /> 
                {/* We pass props in this component as data */}
            </div>
        )
    }
}


