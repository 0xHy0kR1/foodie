const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db') // we use require instead of import because now we are using nodejs instead of reactjs to import db.js
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})