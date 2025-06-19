from flask import Flask, request, jsonify
from flask_cors import cross_origin
from openai import OpenAI
from flask_cors import CORS

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="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",
)

app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/', methods=['POST'])
def AI_bot():
    data = request.json
    symptoms = data.get('symptoms', '')
    condition = data.get('condition', '')
    meds = data.get('meds', '')
    test = data.get('test', '')


    prompt = (
        f"Symptoms: {symptoms}\n"
        f"Prescription: {meds}\n"
        f"Tests recommended: {test}\n"
        f"Additional details: {condition}\n\n"
        "Provide a brief summary:\n"
        "- Which tests are necessary and their priority (low/moderate/high)\n"
        "- Identify unnecessary tests and why\n"
        # "- Consequences of skipping unnecessary tests\n"
        "-site source backing you claims"
        "Keep response short and to the point."
    )

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
                "content": prompt
            }
        ]
    )

    return jsonify({"response": completion.choices[0].message.content})

if __name__ == "__main__":
    app.run(debug=True, port=5001)
