from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form.get("name") or request.json.get("name") or "Unknown"
    return jsonify({"message": f"Hello, {name} from the backend!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
