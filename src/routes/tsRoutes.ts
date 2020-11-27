import Router from 'koa-router'

const router = new Router();
router.prefix('/tsRoutes')

router.get('/', async (ctx) => {
    ctx.body = {
        data: [1, 2, 3]
    };
})

export default router