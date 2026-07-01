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

   const response = await analyzeImage.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
});
};
