# Week 7 – AI Prompt Log

## Prompt 1

Generate a healthy recipe using these ingredients:
Honey, Oats, Almonds.

Include:
1. Recipe Name
2. Ingredients
3. Steps
4. Cooking Tips

### Result
The response was good but returned Markdown formatting (#, *, **), making it less suitable for displaying directly in the frontend.

---

## Prompt 2

You are a professional chef.

Generate a healthy recipe using:
Honey, Oats, Almonds.

Return ONLY valid JSON.

{
  "recipeName": "",
  "ingredients": [],
  "steps": [],
  "tips": []
}

Do not return Markdown.

### Result
The response was clean JSON, making it easy to display using React components.

---

## Prompt 3

You are an experienced nutritionist and chef.

Generate a healthy recipe using the provided ingredients.

Return ONLY JSON with:
- recipeName
- ingredients
- steps
- tips

Keep the recipe simple, healthy, and beginner-friendly.

### Result
This produced the most consistent and well-structured responses.

---

# Best Prompt

Prompt 3 produced the best results because it consistently returned valid JSON and generated clear, beginner-friendly recipes. The structured format made it easy to render the recipe in the frontend using headings, bullet points, and numbered lists without additional parsing.