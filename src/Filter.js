import React, {Component } from 'react';
import './Filter.css';
class Filter extends Component{
    //Defining Function for Resetting Filter Section
    resetValues=()=>{
        let country=document.getElementById('country-chosen');
        let language=document.getElementById('language-chosen');
        let start_date=document.getElementById('country-chosen');
        let end_date=document.getElementById('country-chosen');
        country.value='';
        language.value='';
        start_date.value='';
        end_date.value='';
    }
    //Defining Function for Getting Data from Filter Section and Passing to Show Component
    setAttributes=()=>{
        let country=document.getElementById('country-chosen');
        let language=document.getElementById('language-chosen');
        let start_date=document.getElementById('start_date');
        let end_date=document.getElementById('end_date');
        let data={
            country:country.value,
            language:language.value,
            start_date:start_date.value + "T00:00:00+00:00",
            end_date:end_date.value + "T00:00:00+00:00"
        }
        let flag=false;
        if(data.country!=='')
            flag=true;
        else if(data.language!=='')
            flag=true;
        else if(data.start_date!=='')
            flag=true;
        else if(data.end_date!=='')
            flag=true;  
        if(flag===true){
            this.props.send(data);
        }
    }

    render(){
        //Rendering Filter Component Parts
        return(
            <div className='filter-section'>
                <div className='heading-section'>
                    <p>Filter News</p>
                    <p className='reset' onClick={this.resetValues}>Reset</p>
                </div>
                <hr/>
                <div >
                    <label>language</label>
                    <select id='language-chosen' defaultValue='' name='language'>
                        <option value="">Select</option>
                        <option value="ar">Arabic</option>
                        <option value="zh">Chinese</option>
                        <option value="nl">Dutch</option>
                        <option value="en">English</option>
                        <option value="fi">Finnish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="hi">Hindi</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japenese</option>
                        <option value="ko">Korean</option>
                        <option value="msa">Malay</option>
                        <option value="pt">Protguese</option>
                        <option value="ru">Russian</option>
                        <option value="es">Spanish</option>
                    </select>
                    <label>country</label>
                    <select id='country-chosen' defaultValue='' name='country'>
                        <option value="">Select</option>    
                        <option value="US">United State</option>
                        <option value="TW">Taiwan</option>
                        <option value="DE">German</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CN">China</option>
                        <option value="IN">India</option>
                        <option value="ES">Spain</option>
                        <option value="IT">Italy</option>
                        <option value="PL">Poland</option>
                        <option value="AU">Australia</option>
                        <option value="MY">Malayasia</option>
                        <option value="SG">Singapore</option>
                        <option value="CA">Canada</option>
                        <option value="KR">South Korea</option>
                        <option value="DK">Denmark</option>
                        <option value="FR">France</option>
                        <option value="BE">Belgium</option>
                        <option value="JP">Japan</option>
                        <option value="AT">Austria</option>
                        <option value="PT">Portugal</option>
                        <option value="PH">Philippines</option>
                        <option value="HK">Hong Kong</option>
                        <option value="AR">Argentina</option>
                        <option value="VE">Venezuela</option>
                    </select>
                    <label>start date</label>
                    <input type='date' name='start_date' id="start_date"></input>
                    <label>end date</label>
                    <input type='date' name='end_date' id="end_date"></input>
                    <button className='search-button' onClick={this.setAttributes}>Show News</button>
                </div>
            </div>
        )
    }
}
export default Filter; 