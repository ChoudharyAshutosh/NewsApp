import React, {Component} from 'react';
import './News.css';
class News extends Component{
    render(){
        return(
            <div className='list'>
                <div className='news-list'>
                    <div className='close'>&#10005;</div>
                    <div className='news-section'>
                        <p class='heading'>Joel Pett: Will Mitch do the right thing?</p>
                        <div>
                            <span className='author-section'>Deedra Lawhead</span>
                            <span className='date-section'>2021-01-15 17:11:30</span>
                        </div>
                        <div className='content'>
                           Rejected first draft of Mark Zuckerberg's belated apology for the mass data invasion that affected at least 50 million Facebook users:\nTo all devoted …
                        </div>
                        <div class='reference'>Reference</div>
                        <div className='link'>
                            <a href='https://www.miamiherald.com/opinion/editorial-cartoons/article248532095.html' ><u>https://www.miamiherald.com/opinion/editorial-cartoons/article248532095.html</u></a>
                        </div>
                    </div>
                </div>
                <div className='news-list'>
                    <div className='close'>&#10005;</div>
                    <div className='news-section'>
                        <p class='heading'>Joel Pett: Will Mitch do the right thing?</p>
                        <div>
                            <span className='author-section'>Deedra Lawhead</span>
                            <span className='date-section'>2021-01-15 17:11:30</span>
                        </div>
                        <div className='content'>
                           Rejected first draft of Mark Zuckerberg's belated apology for the mass data invasion that affected at least 50 million Facebook users:\nTo all devoted …
                        </div>
                        <div class='reference'>Reference</div>
                        <div className='link'>
                            <a><u>https://www.miamiherald.com/opinion/editorial-cartoons/article248532095.html</u></a>
                        </div>
                    </div>
                </div>
                <div className='news-list'>
                    <div className='close'>&#10005;</div>
                    <div className='news-section'>
                        <p class='heading'>Joel Pett: Will Mitch do the right thing?</p>
                        <div>
                            <span className='author-section'>Deedra Lawhead</span>
                            <span className='date-section'>2021-01-15 17:11:30</span>
                        </div>
                        <div className='content'>
                           Rejected first draft of Mark Zuckerberg's belated apology for the mass data invasion that affected at least 50 million Facebook users:\nTo all devoted …
                        </div>
                        <div class='reference'>Reference</div>
                        <div className='link'>
                            <a><u>https://www.miamiherald.com/opinion/editorial-cartoons/article248532095.html</u></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default News;