
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Book } from '../model/book'

type Props = {
    books:Book[]
    setBooks:Function
}

 
export default function AllBooks({ books ,setBooks }: Props) {

    const [myBooks,setMyBooks] = useState(books);

    useEffect(() => {  
          setMyBooks(books); 
    },[books]);

    const deleteBook = (id:number)=>{               
    let newBooks = books;
    newBooks = newBooks.filter((book:Book)=>book.id!==id)
    setMyBooks(newBooks)
    setBooks(newBooks)
} 
const filterOrderName=(e:any)=> {
    let t = e.target.value;
    console.log(t);
    let myBooks = books;
    myBooks = myBooks.filter((book:Book)=>{
       return book.title.indexOf(t)>-1;
    })
    setMyBooks(myBooks);
    
  }
  const filterOrderSubject=(e:any)=> {
    let s = e.target.value;
    console.log(s);
    
    let newBooks = books;
    newBooks = newBooks.filter((book:Book)=>{
        console.log(book);
        
        let arr = book.bookshelves.filter(sub=> {return sub.indexOf(s)>-1})
        return arr.length>0
    })
    setMyBooks(newBooks)
    
  }

    const bookRep = myBooks.map((book:any) => {
        return <li key={book.id}>
             <button className="btn btndel" onClick={()=>deleteBook(book.id)}>מחק</button>
           
             <Link className="link"  to={`/${book.id}`}>{book.title}</Link>
                </li>
    });
    
    return (
        <div>
            <div className="center">
                <div  className="form">
            <input className="form-control" placeholder="סנן לפי שם ספר" onChange={filterOrderName}></input>
            
            <br/>
            <input className="form-control" placeholder="סנן לפי נושא"  onChange={filterOrderSubject}></input>

            <br/>
            </div>
            </div>
            <ol>{bookRep}</ol>
        </div>
    )
}



