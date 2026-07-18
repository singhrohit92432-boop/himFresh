# Week 7 – AI Prompt Log

## AI Feature: Gemini AI Recipe Generator

The AI feature generates healthy recipes based on user-provided ingredients. The backend sends prompts to the Gemini API and returns structured recipe data that is displayed in the frontend.

---

# Prompt Variation 1

## Prompt Used

Generate a healthy recipe using these ingredients:

Honey, Oats, Almonds.

Include:
1. Recipe Name
2. Ingredients
3. Steps
4. Cooking Tips

## Example Input

Honey, Oats, Almonds

## Example Output

Honey Oat Energy Bowl

Ingredients:
- Honey
- Oats
- Almonds

Steps:
1. Mix oats and almonds.
2. Add honey.
3. Serve fresh.

Cooking Tips:
- Use fresh ingredients.
- Add fruits for extra nutrition.

## Result

The response was good but returned Markdown formatting (#, *, **), making it less suitable for displaying directly in the frontend. Additional formatting was required before showing it to users.

---

# Prompt Variation 2

## Prompt Used

You are a professional chef.

Generate a healthy recipe using:

Honey, Oats, Almonds.

Return ONLY valid JSON.

Use this format:

{
  "recipeName": "",
  "ingredients": [],
  "steps": [],
  "tips": []
}

Do not return Markdown.

## Example Input

Honey, Oats, Almonds

## Example Output

{
  "recipeName": "Honey Oat Energy Bowl",
  "ingredients": [
    "Oats",
    "Honey",
    "Almonds"
  ],
  "steps": [
    "Mix oats and almonds",
    "Add honey",
    "Serve fresh"
  ],
  "tips": [
    "Use fresh ingredients"
  ]
}

## Result

The response was clean JSON, making it easy to display using React components. The structured format reduced the need for additional frontend processing.

---

# Prompt Variation 3

## Prompt Used

You are an experienced nutritionist and chef.

Generate a healthy recipe using the provided ingredients.

Return ONLY JSON containing:

- recipeName
- ingredients
- steps
- tips

Keep the recipe simple, healthy, and beginner-friendly.

## Example Input

Honey, Oats, Almonds

## Example Output

{
  "recipeName": "Healthy Honey Almond Oats",
  "ingredients": [
    "Oats",
    "Honey",
    "Almonds"
  ],
  "steps": [
    "Prepare oats",
    "Add almonds",
    "Mix with honey"
  ],
  "tips": [
    "Best served fresh",
    "Can add seasonal fruits"
  ]
}

## Result

This produced the most consistent and well-structured responses. It generated simple recipes with clear instructions while maintaining valid JSON formatting.

---


# Best Prompt

Prompt 3 worked best because it consistently returned valid JSON while generating clear, beginner-friendly recipes. The structured JSON format made it easy to display recipe names, ingredients, cooking steps, and tips in the frontend without additional parsing or formatting. Assigning the AI the role of an experienced nutritionist and chef improved the quality of the generated recipes by making them healthier and more practical. This prompt provided the most reliable and consistent responses for the HimFresh application.

---

# System Prompt / Role Used

The AI was instructed to behave as an experienced nutritionist and chef.

This helped Gemini generate healthy, structured, and beginner-friendly recipes suitable for the HimFresh application.