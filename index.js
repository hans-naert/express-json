const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(express.json());

app.post('/append', (req, res) => { 
    console.log(req.body); 
    res.send(JSON.stringify({result:'ok'}));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})