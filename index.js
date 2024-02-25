// app.js
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contactus');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join( __dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/contact-us', contactusRoutes);


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname , 'views', '404.html'));
});

app.use('/', (req, res, next) => {
    res.send('<h1>hello from Express</h1>');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});