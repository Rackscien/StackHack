const {Router} = require('express');
const { getAllMovies, addMovie, getByType, deleteMovie, updateMovie } = require('../controller/MoviesController');
const router = Router();
router.get('/',getAllMovies)
router.post('/save', addMovie);
router.post('/type',getByType);
router.delete('/delete',deleteMovie);
router.put('/update',updateMovie)
module.exports = router;