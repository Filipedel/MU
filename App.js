const express = require("express");
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.static('Front/build'))


app.get("/first", (req,res)=>{
  res.send({
    msg: "Start Front !"
  })
})

app.get('/*', (_, res)=>{
  res.sendFile(path.join(__dirname, './Front/build/index.html'))
})
  
const PORT = process.env.PORT || 8888;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));