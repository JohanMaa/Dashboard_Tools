import React, { useState } from 'react';
import axios from 'axios';

const CVESearch = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchCVE = async () => {
    if (!query) {
      setResult({ success: false, message: 'Please enter a software name', cves: [] });
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('/api/search-cve', { query });
      setResult(response.data);
    } catch (error) {
      setResult({ success: false, message: 'Error searching CVE', cves: [] });
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">CVE Search Tool</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="query">Enter Software Name:</label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Apache 2.4"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={searchCVE}
        disabled={isLoading}
        className={`w-full p-2 rounded text-white ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isLoading ? 'Searching...' : 'Search CVE'}
      </button>
      {result && (
        <div className={`mt-4 p-4 rounded ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-bold">{result.message}</p>
          {result.cves && result.cves.length > 0 && (
            <ul className="list-disc pl-5">
              {result.cves.slice(0, 3).map((cve, index) => (
                <li key={index}>{cve.cve?.id || 'Unknown CVE'}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CVESearch;