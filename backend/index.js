const connectToMongo = require("./db");

const express = require('express')
connectToMongo();


const app = express()
const port = 3000


// end-points
app.get('/', (req, res) => {
  res.send('Hello shubham!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})