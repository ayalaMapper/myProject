
const my_expres = require('express')
const api=require('./api')
const axios = require('axios')
const cors = require('cors')
const app = my_expres()

app.use(my_expres.urlencoded())
app.use(my_expres.json())


app.use(cors())


app.get('/getAllBooks', async (req,res)=>{
  await axios.get('https://gutendex.com/books').then(
        data=>
        {   
            const books = data.data.results.map(book=>{
            return {
                id:book.id,
                title:book.title,
                bookshelves:book.bookshelves
        }  
        })
        res.json(books)
        })
        .catch(
            err=>{console.log(err);}
        )

})
app.get('/getBook:id', async (req,res)=>{
    const id = req.params.id;
    await axios.get(`https://gutendex.com/books?ids=${id}`).then(
        data=>
        { 
        res.json(data.data.results[0])
        })
        .catch(
            err=>{console.log(err);}
        )
})
app.listen(8000,()=>console.log("welcome"))





