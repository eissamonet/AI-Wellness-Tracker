import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const client = new GoogleGenAI({});

export const analyzeImage = async (filePath: string) => {
  const base64ImageFile = fs.readFileSync(filePath, {
    encoding: "base64",
  });

   const  contents = [
    {
        inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
        },
    }
    { text : "Caption this image."},
   ];

   const response = await analyzeImage.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: contents,
});
};
