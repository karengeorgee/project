const express=require('express')
const app=express()
const port=3000
app.get('/',(req,res)=>{
    res.send('hello ')
})


app.get('/homepg',(req,res)=>{
    res.send('home page')
})
app.listen(port,()=>{
    console.log(`example app listeningon port ${port}`)
})
