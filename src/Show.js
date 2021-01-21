import React, {Component} from 'react';
import axios from 'axios';
import Filter from './Filter';
import News from './News';
import './Show.css';
class Show extends Component {
    constructor(props){
        super(props);
        this.state={}
      
    }
    //Fetching Data From API on Load
    componentDidMount(){
        let url='https://api.currentsapi.services/v1/latest-news?language=en&apiKey=Sv5WCDKkRqAXHelrXYSyRrxs0HBqwf_OrVZLLjSstKJprUzb';
        axios.get(url).then((response)=>{
          this.setState({'news':response.data.news})
        })
    }
    //Fetching Data From API on Click of Refresh Button
    latestNews=()=>{
      this.setState({news:''})
        let url='https://api.currentsapi.services/v1/latest-news?language=en&apiKey=Sv5WCDKkRqAXHelrXYSyRrxs0HBqwf_OrVZLLjSstKJprUzb';
        axios.get(url).then((response)=>{
          this.setState({'news':response.data.news})
        })
      this.resetValues();
    }
    //Defining Function for Resetting Filter Section
    resetValues=()=>{
      let country=document.getElementById('country-chosen');
      let language=document.getElementById('language-chosen');
      let start_date=document.getElementById('start_date');
      let end_date=document.getElementById('end_date');
      country.value='';
      language.value='';
      start_date.value='';
      end_date.value='';
  }
    //Fetching Data From API on Filtered Search
    sendRequest=(news)=>{
        this.setState({news:''})
        let url='https://api.currentsapi.services/v1/latest-news?';
        let url2='https://api.currentsapi.services/v1/search?';
        if(news.start_date!=='T00:00:00+00:00' || news.end_date!=='T00:00:00+00:00'){
          url=url2;
        }
        if(news.country!=='' ){
          url=url+`country=${news.country}&`;
          
        }
        if(news.language!=='')
        url=url+`language=${news.language}&`;
        if(news.start_date!=='')
        url=url+`start_date=${news.start_date}&`;
        if(news.end_date!=='')
        url=url+`end_date=${news.end_date}&`;
        url=url+'apiKey=Sv5WCDKkRqAXHelrXYSyRrxs0HBqwf_OrVZLLjSstKJprUzb';
        axios.get(url).then((response)=>{
            if(response.data.news.length===0)
                this.setState({news:'#'})
            else
                this.setState({'news':response.data.news})
        })
    }
    render(){
        return (
          <div className='view'>
            <div className='box'>
              <div className='latest-search-pannel'>
                {/* 
                  Rendering Latest News button
                 */}
                  <button className='latest-search-button' onClick={this.latestNews}>Show Latest News</button>
              </div>
              <div className='container'>
                <div className='search-filter'>
                  {/* 
                    Rendering Filter Component
                 */}
                  <Filter send={this.sendRequest}/>
                </div>
                <div className='news-pannel'>
                  {/* 
                    Rendering News Component and Passing State for Rendering of Data
                 */}
                  <News data={this.state.news}/>
                </div>
              </div>
            </div>  
          </div>
      );
    }
}

export default Show;