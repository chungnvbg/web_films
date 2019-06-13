const Router = require('koa-router');
const LoginDashboardController = require('../controller/LoginDashboardController');

const router = new Router();
const loginDashboardController = new LoginDashboardController();

router.get('/login1', loginDashboardController.getLogin);
router.post('/login1', loginDashboardController.postLogin);

module.exports = router;