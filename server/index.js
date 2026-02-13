require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini
console.log("Initializing Gemini with API Key present:", !!process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateEmail = async (data) => {
  const { recipient, company, product, goal, tone } = data;
  console.log("Received generation request for:", { recipient, company, tone });

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  // ... rest of the function


  let prompt = `Write a cold email to ${recipient} at ${company} about ${product}. The goal is ${goal}. `;

  if (tone === 'mild') {
    prompt += `Tone: Mild Gen Z. Casual, modern, professional but with a bit of slang.`;
  } else if (tone === 'full') {
    prompt += `Tone: Full Gen Z. Use slang, memes (text description), playful tone.`;
  } else if (tone === 'unhinged') {
    prompt += `Tone: Unhinged Gen Z. Chaotic, very funny, exaggerated humor, maybe all lowercase.`;
  } else {
    prompt += `Tone: Casual and professional.`;
  }

  prompt += `\n\nReturn the output as a JSON object with "subject" and "body" fields. Do not include markdown formatting or backticks in the response, just the raw JSON.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Attempt to parse JSON. If it fails, return raw text in body.
    try {
      // Clean up markdown code blocks if present
      const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(cleanedText);
    } catch (e) {
      console.error("Failed to parse JSON from AI response:", text);
      // Fallback: try to extract subject and body manually if possible, or just return text
      return { subject: "Cold Email", body: text };
    }

  } catch (error) {
    console.error("Error generating email:", error);
    throw error;
  }
};

app.post('/generate-email', async (req, res) => {
  try {
    const emailData = await generateEmail(req.body);
    res.json(emailData);
  } catch (error) {
    console.error("Route Handler Error:", error);
    res.status(500).json({
      error: "Failed to generate email",
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
