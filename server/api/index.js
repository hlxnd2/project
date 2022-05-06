const Router = require('@koa/router');
const shopRouter = require('./shop')

const router = new Router();

router.use(shopRouter.routes());

module.exports = router;
