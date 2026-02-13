import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize Gemini
// Note: In a real app, ensure process.env.API_KEY is defined.
// If it's missing, the app will gracefully degrade the chat feature.
const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `
You are the Virtual Concierge for "Breathtaking House at Clanwilliam Dam".
Your tone is luxurious, welcoming, knowledgeable, and relaxed.

Property Details (Based on actual listing):
- Type: Self-catering luxury villa.
- Location: Clanwilliam Dam, Cederberg, Western Cape.
- Capacity: Sleeps 8 guests max.
- Bedrooms: 4 Bedrooms. All have Queen-size beds and en-suite bathrooms.
- Bathrooms: Main bedroom has a full bathroom (bath + shower). Other 3 en-suites have showers only.
- Living Area: Open-plan kitchen, dining, and lounge flowing to patio.
- Kitchen: Fully equipped (Gas stove, Oven, Fridge-freezer, Microwave). Includes Ice Machine and Nespresso machine.
- Scullery: Separate with Dishwasher, Washing machine, and Tumble dryer.
- Outdoor: Covered patio, built-in braai (BBQ), swimming pool (safety net available), garden.
- Parking: Secure off-street parking for 3 vehicles plus space for a boat.
- Rules: No smoking indoors, no loud noise/parties, respect the neighbors.

Your Goal:
Help guests plan their stay, answer questions about the house layout, recommend local activities, and suggest best times to visit.
Keep answers concise (under 100 words) unless asked for a detailed itinerary.
If asked about availability or booking, guide them to the booking form or mention the house is popular and early booking is recommended.
`;

export const sendMessageToGemini = async (history: ChatMessage[], message: string): Promise<string> => {
  if (!ai) {
    return "I'm currently offline (API Key missing). Please contact the host directly via the booking form!";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm having trouble connecting to the concierge service right now. Please try again later.";
  }
};