import React, { useState } from 'react';
import axios from 'axios';

const TracerouteTool = () => {
  const [host, setHost] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const traceRoute = async () => {
    if (!host) {
      setResult({ success: false, message: 'Please enter a host', hops: [] });
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('/api/traceroute', { host });
      setResult(response.data);
    } catch (error) {
      setResult({ success: false, message: 'Error performing traceroute', hops: [] });
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Traceroute Tool</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="host">Enter Host:</label>
        <input
          type="text"
          id="host"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          placeholder="example.com"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={traceRoute}
        disabled={isLoading}
        className={`w-full p-2 rounded text-white ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isLoading ? 'Tracing...' : 'Trace Route'}
      </button>
      {result && (
        <div className={`mt-4 p-4 rounded ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-bold">{result.message}</p>
          {result.success && result.hops.length > 0 && (
            <ul className="list-decimal pl-5">
              {result.hops.map((hop, index) => (
                <li key={index}>{hop}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default TracerouteTool;
