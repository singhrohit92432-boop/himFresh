const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;

    const prompt = `
You are a professional chef.

Generate a healthy recipe using:
${ingredients}

Return ONLY valid JSON.

{
  "recipeName": "",
  "ingredients": [],
  "steps": [],
  "tips": []
}

Do not return Markdown.
Return only JSON.
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    const cleaned = response.text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

const recipe = JSON.parse(cleaned);

res.json(recipe);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to generate recipe.",
    });
  }
});

module.exports = router;