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

} catch (error: any) {
        if (error.status === 503 && retries > 0) {
            console.log(`Gemini busy, retrying in 3s... (${retries} attempts left)`);
            await delay(3000);
            return analyzeImage(filePath, retries - 1);
        }
        throw error;
    }
}
