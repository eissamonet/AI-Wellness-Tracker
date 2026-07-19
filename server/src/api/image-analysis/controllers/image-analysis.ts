import { Context } from 'koa';
import { analyzeImage } from '../services/gemini';

export default {
    async analyze(ctx: Context){
      const file = ctx.request.files?.image as any;

      // ✅ Add debug logging
      console.log('Files received:', ctx.request.files);
      console.log('File object:', file);
      console.log('File path:', file?.filepath);

      if(!file) return ctx.badRequest('No image uploaded');

      const filePath = file.filepath;

      if(!filePath) {
        return ctx.badRequest('File path not found');
      }

      try {
        const result = await analyzeImage(filePath)
        return ctx.send({success: true, result });
      } catch (error: any) {
        console.log('Gemini error:', error.message);
        ctx.internalServerError('Error analyzing image', { error: error.message });
      }
    }
}