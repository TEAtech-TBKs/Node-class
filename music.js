
console.log('this is my new music API')

const express = require('express')
const app = express()
const ejs =  require('ejs')
app.use(express.urlencoded({extended:true}))


let alluser = []

const PORT = 5000

app.listen(PORT, () => {
console.log(`the port is running already on ${PORT}`)
}
)
const endpoint=[
    {artist:"simisola",    yearOfRelease:2019, genre:"afro-pop", id:"",   url:'https://youtu.be/-L8hLkg21MQ?si=0mCmDXrozNTukRTS', image:'', album:'Duduke',            duration:'2:52:00'},
    {artist:"Tom Frane",   yearOfRelease:2024, genre:"Pop",      id:"" ,  url:'https://youtu.be/zmeo8lk435A?si=zLUXbcFjmz1e2ZFy', image:'', album:'Never let this go', duration:'1:52:24'},
    {artist:"Alan Walker", yearOfRelease:2017, genre:"Pop",      id:"" ,  url:'https://youtu.be/qHDJSRlNhVs?si=QgOmzlhRn6b2wswS', image:'', album:'The specter',       duration:'2:12:21'},
    {artist:"Alan Walker", yearOfRelease:2015, genre:"Pop",      id:"" ,  url:'https://youtu.be/kyLuzKbgXAs?si=SANARJlrOZmFdx4w', image:'', album:'Headlight',         duration:'3:59:45'},
    {artist:"illenium",    yearOfRelease:2019, genre:"Pop",      id:"" ,  url:'https://youtu.be/lzkKzZmRZk8?si=C4_b_QFDbz0Wnsqr', image:'', album:'Takeaway',          duration:'1:30:15'}
];
app.get('/', (request, response) =>{
   response.send('Welcome to our Music App')
})
app.get('/music',(req ,res)=>{
    res.send(endpoint)
})
app.get('/about-Pg', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/ejs-Pg',(req, res)=>{
    res.render('index.ejs')
})
