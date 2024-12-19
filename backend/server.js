const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', taskRoutes);

mongoose.connect('mongodb+srv://hcxra:SzDPyaG6bkouyUE6@hw5todo-app.xfalr.mongodb.net/?retryWrites=true&w=majority&appName=hw5todo-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start server
const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
