const express = require('express');
var cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use((req, res) => {
    return res.status(200).json({
        status: 'ok',
        success: true
    })
})

const PORT = process?.env?.PORT || 3000;
app.listen(PORT, () => {
    console.log('Example app listening on port ', PORT);
});