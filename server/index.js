const express = require('express')
const cors = require('cors')
const path = require('path')

app.use(cors());
const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../client/styles.css'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/main.js'))
  })
  
app.get('/animals', (req, res) => {
    res.send(['Lions', 'Tigers', 'Bears'])
})

app.use('/js', express.static(path.join(__dirname, '../client/main.js')))
app.use('/server/index.js', express.static(path.join(__dirname, '../server/index.js')))
app.use(express.static(__dirname +'../client'))

const port = process.env.PORT || 4004

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})