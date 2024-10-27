const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT ||  3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://digvijaysinghtomar547:nOclSi4hVbHmn2RP@mongoatlas.cwtoq.mongodb.net/?retryWrites=true&w=majority&appName=MongoAtlas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);


app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Contact saved" });
    } catch (error) {
        res.status(500).json({ error: "Error saving contact" });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
