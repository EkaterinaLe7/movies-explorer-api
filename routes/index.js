const router = require('express').Router();

const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const movieRouter = require('./movies');
const { login, createUser } = require('../controllers/users');
const { loginValidation, createUserValidation } = require('../middlewares/validation');

const NotFound = require('../errors/NotFound');

router.post('/signin', loginValidation, login);
router.post('/signup', createUserValidation, createUser);

router.use(auth);

router.use(usersRouter);
router.use(movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFound('Страница по указанному маршруту не найдена'));
});

module.exports = router;
