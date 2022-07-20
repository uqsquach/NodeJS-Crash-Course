const express = require('express');

// express app
const app = express();


app.get('/', (req, res) => {
    res.send('<p>Home page</p>')

    res.end();
})

//listen for request
app.listen(4000); 

app.use((req,res) => {
    
})