import express from 'express';
//import {pgPool} from './pg_connection.js'

const app = express();
app.use(express.urlencoded({extended: true}));

app.listen(3001, () => {
    console.log('Serveri juoksee!');
});


try {
    await pgPool.query('');
}catch(e){
    console.log(e.message);
}


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
   res.send('user test')
})

