import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import ReactPaginate from 'react-paginate';

const App = () => {

  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const fetchData = async (keyword) => {
    const response = await fetch (`/events?q=${keyword}`)
    const data = await response.json()
    console.log(data)
    setData(data)
  }

  useEffect(() => {fetchData(keyword)}, []);

  return (
    <div>
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        fetchData={fetchData}
      />
      <Events
        events={data}
      />
      <ReactPaginate
        pageCount={pageNum}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={}
      />
    </div>
  )
}

export default App;