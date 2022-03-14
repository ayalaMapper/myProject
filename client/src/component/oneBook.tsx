
import React, { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Book } from '../model/book'

type Props = {
}

export default function OneBook({  }: Props) {

    const url = "http://localhost:8000/getBook"
    const [book, setBook]:any = useState('')
    const { id } = useParams();
    let authors1:any[] =[];
    const navigate = useNavigate();
    useEffect(() => {
        const getBookOrderId = async (url: String) => {
            let data = await fetch(`${url}${id}`);
            let book = await data.json();
            console.log(book);
              authors1 = book.authors;
           
            setBook(book)
        }
        getBookOrderId(url)
    
    }, []);
let myAuthors;
let ref;
let lang;
let sub;
let refImg;
    if(book.authors){
        let e = Object.entries(book.formats)
        e.forEach((e)=>{
            if(e[0]=='text/plain')
            {ref=e[1]}
            if(e[0]=='image/jpeg'){
                refImg = e[1];
            }
        })
       lang = [...book.languages];
       sub = [...book.subjects];
        
        myAuthors =book.authors.map((a:any)=>{
          return <h3 key={a.name}>
              <span>{a.name}</span>
              <span>{a.birth_year}</span>
              <span>-</span>
              <span>{a.death_year}</span>
              </h3>
      })
    }
    
   
  
 

    return (
        <div className="center">
             <button className="btn btndel" onClick={()=>navigate('/')}>חזרה</button>
             <br/>
          <h1>{book.title}</h1> 
          <div>{myAuthors}</div>
        <h4>{book.copyright?"כל הזכויות שמורות":''}</h4>
        <img src={refImg} />
        <div className="allBor">
        <div className="bor">
       <h4>{book.download_count}</h4>
         <h4> {book.download_count?"?כבר הורידו את הספר הזה , רוצים גם":''} </h4>
         
            <br/>
      
      
        <a href={ref} download>הורדה <i className="fa fa-download"></i></a> </div>
        <div className="bor">
            <h3>:שפה</h3>
            <h4>{lang}</h4>
        </div>
             <div className="bor">
            <h3>:סוג</h3>
            <h4>{sub}</h4>
        </div>
        </div></div>
       
    )
}