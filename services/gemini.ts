import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILLS } from '../constants';

const apiKey = process.env.API_KEY || '';

// Initialize the Gemini client
// Note: In a real production app, you might want to proxy this through a backend 
// to avoid exposing the key if it's not restricted to the domain.
const ai = new GoogleGenAI({ apiKey });

// Construct the system prompt using the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for John Doe's portfolio website. 
Your goal is to answer questions about John professionally and concisely using the provided context.
If a user asks about something not in the context, politely state that you only have information about John's professional background.

Context:
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Bio: ${PERSONAL_INFO.bio}
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.skills.join(', ')}`).join('\n')}

Tone: Professional, friendly, and helpful. Keep answers under 3 sentences unless asked for detail.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my brain (API Key) is missing currently. Please contact John directly via email.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};