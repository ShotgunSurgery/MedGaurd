from openai import OpenAI

client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key="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",
)

# completion = client.chat.completions.create(
#   extra_headers={
#     "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
#     "X-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
#   },
#   extra_body={},
#   model="deepseek/deepseek-r1-0528:free",
#   messages=[
#     {
#       "role": "user",
#       "content": "What is the meaning of life?"
#     }
#   ]
# )

completion = client.chat.completions.create(
  extra_headers={
    "HTTP-Referer": "<YOUR_SITE_URL>",
    "X-Title": "<YOUR_SITE_NAME>",
  },
  extra_body={},
  model="deepseek/deepseek-r1-0528:free",
  messages=[
    {
       "role": "user",
      "content": (
        "Symptoms: mild headache, occasional dizziness\n"
        "Prescription: Paracetamol\n"
        "Tests recommended: MRI brain, Chest X-ray, CBC\n"
        "Additional details: No history of serious illness, no diabetes or hypertension.\n\n"
        "Provide a brief summary:\n"
        "- Which tests are necessary and their priority (low/moderate/high)\n"
        "- Identify unnecessary tests and why\n"
        "- Consequences of skipping necessary tests\n"
        "Keep response short and to the point."
      )
    }
  ]
)


print(completion.choices[0].message.content)