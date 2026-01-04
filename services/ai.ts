import { GoogleGenAI } from "@google/genai";
import { VEA_SYSTEM_INSTRUCTION } from "../constants";

// Initialize the Google GenAI SDK
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Using the latest model for better reasoning and "intelligence"
const MODEL_NAME = "gemini-3-flash-preview";

export const createChatSession = () => {
  return ai.chats.create({
    model: MODEL_NAME,
    config: {
      systemInstruction: VEA_SYSTEM_INSTRUCTION,
      temperature: 0.7, // Slightly creative but professional
      maxOutputTokens: 2000, // Increased from 250 to allow detailed explanations
    },
  });
};