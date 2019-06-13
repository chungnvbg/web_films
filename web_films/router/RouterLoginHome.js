const Router = require('koa-router');
const LoginHomeController = require('../controller/LoginHomeController');

const router = new Router();
const loginHomeController = new LoginHomeController();

router.get('/login2', loginHomeController.getLogin);
router.post('/login2', loginHomeController.postLogin);

module.exports = router;