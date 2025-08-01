import React, { useState } from 'react';
import axios from 'axios';

const WhoisLookup = () => {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const lookupWhois = async () => {
    if (!domain) {
      setResult({ success: false, message: 'Please enter a domain', data: {} });
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('/api/whois', { domain });
      setResult(response.data);
    } catch (error) {
      setResult({ success: false, message: 'Error performing WHOIS lookup', data: {} });
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Domain WHOIS Lookup</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="domain">Enter Domain:</label>
        <input
          type="text"
          id="domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="example.com"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={lookupWhois}
        disabled={isLoading}
        className={`w-full p-2 rounded text-white ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isLoading ? 'Looking up...' : 'Lookup WHOIS'}
      </button>
      {result && (
        <div className={`mt-4 p-4 rounded ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-bold">{result.message}</p>
          {result.success && (
            <>
              <p>Domain: {result.data.domain}</p>
              <p>Registrar: {result.data.registrar}</p>
              <p>Created: {result.data.creation_date}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default WhoisLookup;
