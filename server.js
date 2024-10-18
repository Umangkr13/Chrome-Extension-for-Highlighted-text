const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/page-info', (req, res) => {
    const { title, url } = req.body;
    console.log('Received page info:', { title, url });
    
    res.json({ message: 'Page info received successfully', received: { title, url } });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
