require('dotenv').config();

const mongoose = require('mongoose');

console.log('MONGODB_URI:', process.env.MONGODB_URI); // Log the URI to check its value

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database successfully connected to blog-app");
}).catch((err) => {
    console.error("Database connection error:", err.message);
});
