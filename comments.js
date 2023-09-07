//Create web server


//Import express
const express = require('express');
const app = express();
const port = 3000;

//Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//Import mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-demo', {useNewUrlParser: true, useUnifiedTopology: true});

//Import Post model
const Post = require('./models/post.js');

//Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

//Import routes
const postRoutes = require('./routes/posts.js');
const commentRoutes = require('./routes/comments.js');

//Use routes
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

//Home page
app.get('/', (req, res) => {
    res.render('index');
});

//Listen on port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
