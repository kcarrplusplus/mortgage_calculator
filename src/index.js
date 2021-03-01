const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello Mortgage Interest');
});

app.listen(3000, () => {
    console.log(`Mortgage app listening on port ${process.env.PORT}`);
});