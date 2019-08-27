const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const controller = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));
app.use(session({
    secret: 'ThiSiSsECretaiodjfapsfnv2',
    resave: false,
    saveUninitialized: false
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Connected to the databse!');
});

//endpoints here!


app.post('/api/users', controller.createUser);

app.post('/api/users', controller.loginUser);

app.get('/api/posts/:user_id', controller.getPosts);

app.put('/api/posts/:post_id', controller.updatePosts);


//listening!
const PORT = 4000;
app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`))