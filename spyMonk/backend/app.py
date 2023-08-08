from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify(message="Welcome to ImaginAI - Empower your Creativity with AI-Generated NFTs verified by Tezos")

@app.route('/generate_nft', methods=['POST'])
def generate_nft():
    # implementing AI-generated NFT generation
    # processing input data from the request 
    # return the generated NFT 
    request_data = request.get_json()
    title = request_data.get('title')
    description = request_data.get('description')
    image_url = request_data.get('image_url')
    # imagine AI model procesing NFT
    generated_nft = {
        'title': title,
        'description': description,
        'image_url': image_url,
        # add more NFT detailing if needed
    }
    return jsonify(generated_nft)

if __name__ == '__main__':
    app.run(debug=True)
