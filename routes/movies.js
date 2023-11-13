const router = require('express').Router();
const { createMovieValidation, movieIdValidation } = require('../middlewares/validation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/movies', getMovies);

router.post('/movies', createMovieValidation, createMovie);

router.delete('/movies/:movieId', movieIdValidation, deleteMovie);

module.exports = router;
