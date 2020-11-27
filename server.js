const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// init middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/games', require('./routes/api/games'));
app.use('/api/managers', require('./routes/api/managers'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));