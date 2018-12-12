const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./client'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser());

// app.use(bodyParser.json()) //difference between them?

app.get('/', (req, res) => res.render('index.ejs', { column: '', rows: '' }));

app.post('/', function (req, res) {

    var data = JSON.parse(req.body.jsonText)
    var keys = Object.keys(data)
    keys.pop()
    var keyNames = keys.join();
    var keyValues = []

    var CSVparser = function (obj) {
        var valueArr = []
        for (key in obj) {
            if (key !== 'children') {
                valueArr.push(obj[key])
            } else {
                if (obj.children.length !== 0) {
                    for (var i = 0; i < obj.children.length; i++) {
                        CSVparser(obj.children[i])
                    }
                }
            }
        }
        keyValues.push([valueArr.join()]);
    }

    CSVparser(data);

    res.render('index.ejs', { column: keyNames, rows: keyValues })
})


app.post('/upload', function (req, res) {
    res.send("File is uploaded");
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