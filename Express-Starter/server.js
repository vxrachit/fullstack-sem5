import express from 'express';

const app = express(); // server  ka instance banaya h sari baat yhi hogi
app.get("/",(req,res) =>{
    res.status(200).json({
        message: "Hello World"
    })
})

app.get("/home",(req,res) =>{
    res.status(200).json({
        message: "Home"
    })
})
app.get("/about",(req,res) =>{
    res.status(200).json({
        message: "About"
    })
})
app.post("uploadDocument",(req,res) =>{
    res.status(200).json({
        message: "Document Uploaded"
    })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
