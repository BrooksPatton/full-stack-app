const express = require('express')
const bodyParser = require('body-parser')

const gamesRouter = require('./api/games')

const app = express()
const port = 3000

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
//  
//  // parse application/json 
app.use(bodyParser.json())

app.use('/api/v1/games', gamesRouter);

app.listen(port, () => {
  console.info(`API listening on port ${port}`)
})
