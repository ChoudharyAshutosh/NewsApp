import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import './News.css';
class News extends Component{
    hideComponent=(event)=>{
        let d=event.target.id.split('$$')
        console.log(d)
        document.getElementById(d[0]).style.display='none';
    }

    show=(article)=>{
        if(!article)
            return(
                <div className='loading-bar-container'>
                    <CircularProgress className='progress-size' />
                </div>
            )
        else if(article==='#')
            return(
                <div className='loading-bar-container'>
                <h2>Data Not Found</h2>
            </div>
            )
        else
            return  article.map(article=>{
                        if(article.image!=='None')
                            return(
                                <div className='news-container' key={article.id} id={article.id}>
                                    <div className='close' id={article.id+'$$'} onClick={this.hideComponent}>&#10005;</div>
                                    <div className='news-section'>
                                        <p className='heading'>{article.title}</p>
                                        <div>
                                            <span className='author-section'>{article.author}</span>
                                            <span className='date-section'>{article.published}</span>
                                        </div>
                                        <div className='news'>
                                            <div className='news-image'>
                                                <img height='140px' width='150px' src={article.image} alt={article.image}/>
                                            </div>
                                            <div className='news-content'>
                                                <div className='content'>{article.description}</div>
                                                <div className='reference'>Reference</div>
                                                <div className='link'>
                                                    <a href={article.url}><u>{article.url}</u></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        else
                            return(
                                <div className='news-container' key={article.id} id={article.id}>
                                    <div className='close' id={article.id+'$$'} onClick={this.hideComponent}>&#10005;</div>
                                    <div className='news-section'>
                                        <p className='heading'>{article.title}</p>
                                        <div>
                                            <span className='author-section'>{article.author}</span>
                                            <span className='date-section'>{article.published}</span>
                                        </div>
                                        <div className='content-non-image'>{article.description}</div>
                                        <div className='reference-non-image'>Reference</div>
                                        <div className='link-non-image'>
                                            <a href={article.url}><u>{article.url}</u></a>
                                        </div>
                                    </div>
                                </div>
                            )        
                    })
    }
    render(){
        return(
            <div className='list'>
            {   this.show(this.props.data)
                
            }
                
            </div>
        );
    }
}
export default News;