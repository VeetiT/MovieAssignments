import express from 'express';
import {pgPool} from './pg_connection.js'

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


app.get('/movie', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM movie')
        res.json(result.rows)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

app.get('/genre', (req, res) => {
    res.send('genre test')
})

app.get('/review', (req, res) => {
    res.send('review test')
})

app.get('/users', async (req, res) => {
   try {
        const result = await pgPool.query('SELECT * FROM users')
        res.json(result.rows)
   } catch (error) {
        res.status(400).json({error: error.message})
   }
})

