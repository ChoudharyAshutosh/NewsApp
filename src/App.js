import './App.css';
import Filter from './Filter';
function App() {
  return (
    <div>
    <div className='latest-search-pannel'>
        <button className='latest-search-button'>Show Latest News</button>
    </div>
      <div className='container' >
        <div className='search-filter'>
            <Filter/>
        </div>
        <div className='news-pannel'>

        </div>
      </div>
    </div>
  );
}

export default App;
