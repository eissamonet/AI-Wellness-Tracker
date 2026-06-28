import { Context } from 'koa';


export default {
    async analyze(ctx: Context){
      const file = ctx.request.files?.image as any;
    }
}