const express = require('express');
const app = express();
// require('dotenv').config();
const path = require('path');
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('This site is currently in development. Thanks for stopping by!');
});

// Set static folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/apocalypse', (req, res) => {
  res.render('apocalypse')
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});