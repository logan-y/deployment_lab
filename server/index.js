const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/main.js'))
  })
  
app.get('/animals', (req, res) => {
    res.send(['Lions', 'Tigers', 'Bears'])
})
    
const port = process.env.PORT || 4004

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})