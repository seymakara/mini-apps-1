const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('client'))
app.use(bodyParser());
// app.use(bodyParser.json()) //difference between them?

app.get('/', (req, res) => console.log('request received'));

app.post('/', function (req, res) {
    console.log(req.body)
    var data = JSON.parse(req.body.jsonText)
    var keyNames = []
    var keyValues = []
    for (key in data) {
        if (key !== 'children') {
            keyNames.push(key);
        }
    }
    for (key in data) {
        if (key !== 'children') {
            keyValues.push(data[key]);
        }
    }
    var data = (keyNames.join() + '\n' + keyValues.join() + '\n');
    res.send(data)
})



app.listen(port, function () {
    console.log(`Server is running on ${port} port`)
})


/*
- The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), 
    where the keys of the JSON objects will be the columns of the CSV report.
- You may assume the JSON data has a regular structure and hierarchy (see included sample file). 
- In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, 
    but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
- You may also assume that child records in the JSON will always be in a property called `children`.
*/