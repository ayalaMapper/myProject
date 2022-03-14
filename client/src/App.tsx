import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, useParams } from 'react-router';
import AllBooks from './component/allBooks';
import OneBook from './component/oneBook';
import { useNavigate } from 'react-router-dom';
import { Book } from './model/book';

function App() {

  const url = "https://localhost:8000/getAllBooks"
  const [books, setBooks]:any = useState([])

  const navigate = useNavigate()
 
  useEffect(() => {
      const getAllBooks = async (url: String) => {
          fetch('http://localhost:8000/getAllBooks')
      .then(response => response.json())
      .then(data => setBooks( data ));
      }
     
      
      getAllBooks(url)
    
      
  }, []);

  return (
    <div className="center">
    <h1>SQream מטלת בית לחברת </h1> <br />
   
    <Routes>
      <Route path='/' element={<AllBooks books={books} setBooks={setBooks}/>}></Route>
      <Route path='/:id' element={<OneBook  />}></Route>
    </Routes>
  </div>
  );
}

export default App;


