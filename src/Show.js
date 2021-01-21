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
    }
    //Fetching Data From API on Filtered Search
    sendRequest=(news)=>{
        this.setState({news:''})
        let url='https://api.currentsapi.services/v1/search?';
        if(news.country!=='')
        url=url+`country=${news.country}&`;
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