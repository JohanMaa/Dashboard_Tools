from flask import Flask, request, jsonify
from flask_cors import CORS
from urllib.parse import urlparse
import re

app = Flask(__name__)
CORS(app)  # Enable CORS

def is_phishing_url(url):
    try:
        # Parse URL
        parsed_url = urlparse(url)
        
        # Rule 1: Check if URL uses HTTPS
        is_https = parsed_url.scheme == 'https'
        
        # Rule 2: Check URL length
        is_long_url = len(url) > 75
        
        # Rule 3: Check for suspicious characters (e.g., @, -, multiple dots)
        suspicious_chars = bool(re.search(r'[@\-]{2,}|\.\.+', url))
        
        # Rule 4: Check for IP address in URL
        is_ip_address = bool(re.match(r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$', parsed_url.netloc))
        
        # Simple scoring logic
        score = 0
        if not is_https:
            score += 30
        if is_long_url:
            score += 20 
        if suspicious_chars:
            score += 30
        if is_ip_address:
            score += 20
            
        is_phishing = score > 50
        confidence = score if is_phishing else 100 - score
        message = 'Potential Phishing URL' if is_phishing else 'URL appears safe'
        
        return {
            'isPhishing': is_phishing,
            'message': message,
            'confidence': confidence,
            'details': {
                'is_https': is_https,
                'url_length': len(url),
                'suspicious_chars': suspicious_chars,
                'is_ip_address': is_ip_address
            }
        }
    except Exception as e:
        return {
            'isPhishing': True,
            'message': 'Invalid URL format',
            'confidence': 0,
            'details': {'error': str(e)}
        }

@app.route('/api/check', methods=['POST'])
def check_url():
    data = request.get_json()
    url = data.get('url', '')
    if not url:
        return jsonify({'isPhishing': True, 'message': 'No URL provided', 'confidence': 0})
    result = is_phishing_url(url)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)