const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/profile_uploads', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ImageSchema = new mongoose.Schema({
    imagePath: String
});

const Image = mongoose.model('Image', ImageSchema);

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 } // Limit file size to 1MB
}).single('profilePicture');

// Upload endpoint
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).json({ success: false, message: err.message });
        } else {
            if (req.file == undefined) {
                res.status(400).json({ success: false, message: 'No file selected!' });
            } else {
                const newImage = new Image({ imagePath: `/uploads/${req.file.filename}` });
                newImage.save().then(() => {
                    res.json({ success: true, url: newImage.imagePath });
                });
            }
        }
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));
