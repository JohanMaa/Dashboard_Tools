import React, { useState } from 'react';
import axios from 'axios';

const IPChecker = () => {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkIP = async () => {
    if (!ip) {
      setResult({ isMalicious: true, message: 'Please enter an IP address', score: 0 });
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('/api/check-ip', { ip });
      setResult(response.data);
    } catch (error) {
      setResult({ isMalicious: true, message: 'Error checking IP', score: 0 });
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">IP Reputation Checker</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="ip">Enter IP Address:</label>
        <input
          type="text"
          id="ip"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="192.168.1.1"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={checkIP}
        disabled={isLoading}
        className={`w-full p-2 rounded text-white ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isLoading ? 'Checking...' : 'Check IP'}
      </button>
      {result && (
        <div className={`mt-4 p-4 rounded ${result.isMalicious ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
          <p className="font-bold">{result.message}</p>
          <p>Abuse Score: {result.score || 0}%</p>
        </div>
      )}
    </div>
  );
};

export default IPChecker;
