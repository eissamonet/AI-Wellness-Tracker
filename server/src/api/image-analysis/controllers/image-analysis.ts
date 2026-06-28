import { Context } from 'koa';


export default {
    async analyze(ctx: Context){
      const file = ctx.request.files?.image as any;
      if(!file) return ctx.badRequest('No image uploaded');

      const filePath = file.filepath;

      try {

      } catch (error) {

      }
    }
}