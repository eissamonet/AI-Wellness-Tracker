import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const analyzeImage = async (filePath: string, retries = 3): Promise<any> => {

    try {

  const base64ImageFile = fs.readFileSync(filePath, {
    encoding: "base64",
  });

   const contents = [
    {
        inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
        },
    },
    { text : "Extract the food name and estimated calories from this image in a JSON object."},
   ];

   const config = {
    responseMimeType: "application/json",
    responseJsonSchema: {
        type: "object",
        properties: {
            name: { type: "string" },
            calories: { type: "number" },
        },
    },
   }

   const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: contents,
    config
});

// response.text should be valid JSON matching the schema
return JSON.parse(response.text)

} catch (error) {
     console.log(error);
     throw error;
    }
}
