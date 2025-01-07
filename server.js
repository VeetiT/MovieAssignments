import express from 'express';
import {pgPool} from './pg_connection.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3001, () => {
    console.log('Serveri juoksee!');
});


app.get('/movie', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM movie')
        res.json(result.rows)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

app.get('/genre', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM genre')
        res.json(result.rows)
   } catch (error) {
        res.status(400).json({error: error.message})
   }
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



app.get('/movie/:id', async (req, res) => {
    const movieid = req.params.id

    try {
        const result = await pgPool.query(
            'SELECT movie_id, movie_name, movie_year FROM movie WHERE movie_id = $1',
            [movieid]
        )
        if (result.rows.length>0){
        res.status(200).json(result.rows[0])
        } else {
            res.status(404).json({message: 'Movie not found'})
        }
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
})

app.post('/genres', async(req, res)=>{
    const gen = req.body.genre

    try{
        await pgPool.query(
            'INSERT INTO genre (genre_name) VALUES ($1)',
            [gen] 
        )
        res.end();
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

app.post('/movie', async(req, res) => {
    const moviename = req.body.movie_name
    const year = req.body.movie_year
    const genre = req.body.genre_id

    try {
        await pgPool.query(
            'INSERT INTO movie (movie_name, movie_year, genre_id) VALUES ($1, $2, $3)',
            [moviename, year, genre]
        )
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

app.delete('/movie:id', async(req, res) => {
    const movieid = req.params.id

    try {
        await pgPool.query(
            'DELETE FROM movie WHERE movie_id = $1',
            [movieid]
        )
        res.status(200).json({message: 'Movie deleted'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})



