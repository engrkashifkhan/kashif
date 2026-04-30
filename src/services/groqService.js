import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Required for frontend usage
});

export const getGroqChatCompletion = async (messages, systemPrompt) => {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        ...messages,
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 500,
    });

    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Groq API Error:", error);
    throw error;
  }
};
