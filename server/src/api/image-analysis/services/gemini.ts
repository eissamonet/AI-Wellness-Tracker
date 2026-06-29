import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const client = new GoogleGenAI({});

export const analyzeImage = async (filePath: string) => {
  const base64ImageFile = fs.readFileSync(filePath, {
    encoding: "base64",
  });
};
