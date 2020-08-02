import React, { useState } from "react";

const Search = (props) => {
  const { keyword, setKeyword, fetchData} = props;
  // console.log(keyword)

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>
        Keyword:
        <input type="text" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
      </label>
      <input type="submit" value="Submit" />
      </form>
      <div>

      </div>
    </>
  );
}

export default Search;