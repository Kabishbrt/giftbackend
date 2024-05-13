// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const orderroute = require('./routes/orderRoutes');
const userroute = require('./routes/userRoutes');

const path = require('path');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// MongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://assignment:start@cluster0.ob3tf0p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.laog(err));


// Middleware   
app.use(bodyParser.json());

// Routes
app.use('/', orderroute);
app.use('/users/', userroute);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
