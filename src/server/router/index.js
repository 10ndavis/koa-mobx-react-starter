import makeRouter from 'koa-router';

const router = makeRouter();

router.get('/*', async(ctx, next) => {

  // await ctx.state.mobx.CounterStore.setRandomNumber();
  // await ctx.state.mobx.UserStore.getNewRandomUser();

  await next();
});

export default router;
