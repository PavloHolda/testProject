import './App.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './components/Comments/Comments';
import Form from './components/Form/Form';
import Pagination from './components/Pagination/Pagination';

const App = () => {

  const [isClicked, setIsClicked] = useState(true);
  const [data, updateData] = useState(null);
  const [countOfComments, setCountOfComments] = useState(2);
  const [countOfPages, setCountOfPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    const requestUrl = 'https://jordan.ashton.fashion/api/goods/30/comments';
    const fetchData = async () => {
      const response = await axios.get(requestUrl);
      updateData(response.data);
      setCountOfPages(response.data.last_page)
      setCurrentPage(response.data.current_page);
    }
    fetchData();
  }, []);

  let pages = [];

  for(let i = 1; i <= countOfPages; i++) {
    pages.push(i);
  }

  const handleClick = () => {
    setIsClicked(!isClicked);
    isClicked ? setCountOfComments(10) : setCountOfComments(0);
  }

  if(!data) {
    return <div>Loading...</div>
  }

  return (
    <div className="app">
      <Form 
        comments={data}
      />
      <button type="button" onClick={() => handleClick()}>{countOfComments < data.data.length ? "Show all comments" : "Hide comments"}</button>
      <Comments 
        comments={data} 
        countOfComments={countOfComments} 
      />
      <button 
        className={countOfComments < data.data.length ? "showmore" : "d-none"} 
        onClick={() => setCountOfComments(countOfComments + 2)}>
          Show more
        </button>
      <ul className="pagination">
        {
          pages.map((item,index) => {
            return(
              <Pagination
                key={index}
                item={item}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                updateData={updateData}
                setCountOfComments={setCountOfComments}
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
