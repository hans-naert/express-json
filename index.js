const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(express.json());

app.post('/append', (req, res) => { 
    console.log(req.body); 

    // read file and make object
    let content = JSON.parse(fs.readFileSync('./public/data.json', 'utf8'));
    // edit or add property
    content={...content, ...req.body}
    //write file
    fs.writeFileSync('./public/data.json', JSON.stringify(content));

    res.send(JSON.stringify({result:'ok'}));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})