// eslint-disable-next-line no-unused-vars
import React, { use, useEffect, useState } from 'react'
import Books from './components/Books';

const App = () => {

  const[books,setBooks] = useState([]);
  const [filteredData,setFilteredData] = useState([]);

  const getData = () => {
    fetch('https://book-backend-krzv.onrender.com/books',{
      headers:{
        "Authorization":"whatever-you-want"
      }
    })
    .then((data)=>{
      return data.json();
    })
    .then((data)=>{
      console.log(data);
      setBooks(data);
      setFilteredData(data);
    })
    .then((err)=>{
      console.log(err);
    })
  }

  const filterData = (text) => {
    const inputText = text.toLowerCase().trim();
    const filteredBooksData = books.filter((ele)=>{
      const isAuthorPresent = ele.authors.some((ele)=>{
        const authorName = ele.toLowerCase();

        return authorName.startsWith(inputText);
      })
      const tempTitle = ele.title.toLowerCase();

      return tempTitle.startsWith(inputText) || isAuthorPresent;
    })
    setFilteredData(filteredBooksData);
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <><div>
      <input type="text" onChange={(event) => {
        filterData(event.target.value);
      } } />
    </div><div>
        <Books books={filteredData} />
      </div></>
  )
}

export default App
