import React, {Component } from 'react';
import './Filter.css';
class Filter extends Component{
render(){
    return(
        <div className='filter-section'>
            <div className='heading-section'>
                <p>Filter News</p>
                <p>Reset</p>
            </div>
            <hr/>
        </div>
    )
}
}
export default Filter; 