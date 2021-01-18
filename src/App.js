import './App.css';
import Filter from './Filter';
import News from './News';
function App() {
  return (
    <div className='view'>
      <div className='box'>
        <div className='latest-search-pannel'>
            <button className='latest-search-button'>Show Latest News</button>
        </div>
        <div className='container'>
          <div className='search-filter'>
              <Filter/>
          </div>
          <div className='news-pannel'>
            <News/>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
