import express from 'express';

const app = express();
app.use(express.urlencoded({extended: true}));

app.listen(3001, () => {
    console.log('Serveri juoksee!');
});


app.get('/movie', (req, res) => {
    res.send('Movie test')
})

app.get('/genre', (req, res) => {
    res.send('genre test')
})

app.get('/review', (req, res) => {
    res.send('review test')
})

//app.get('/user', (req, res) => {
 //   res.send('user test')
//})

app.post('/user', (req, res) => {

    let user = req.body;
    console.log(user)

    res.send();
}) 
