import express from 'express';

const app = express();
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

app.get('/user', (req, res) => {
    res.send(' user test')
}) 