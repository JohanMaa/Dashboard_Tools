import React, { useState } from 'react';
import axios from 'axios';

const PortScanner = () => {
  const [host, setHost] = useState('');
  const [startPort, setStartPort] = useState('');
  const [endPort, setEndPort] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const scanPorts = async () => {
    if (!host || !startPort || !endPort) {
      setResult({ success: false, message: 'Please enter host and port range', openPorts: [] });
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('/api/scan-ports', { host, startPort: parseInt(startPort), endPort: parseInt(endPort) });
      setResult(response.data);
    } catch (error) {
      setResult({ success: false, message: 'Error scanning ports', openPorts: [] });
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Network Port Scanner</h2>
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
      <div className="mb-4 flex space-x-2">
        <div className="flex-1">
          <label className="block text-gray-700 mb-2" htmlFor="startPort">Start Port:</label>
          <input
            type="number"
            id="startPort"
            value={startPort}
            onChange={(e) => setStartPort(e.target.value)}
            placeholder="1"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 mb-2" htmlFor="endPort">End Port:</label>
          <input
            type="number"
            id="endPort"
            value={endPort}
            onChange={(e) => setEndPort(e.target.value)}
            placeholder="100"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <button
        onClick={scanPorts}
        disabled={isLoading}
        className={`w-full p-2 rounded text-white ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isLoading ? 'Scanning...' : 'Scan Ports'}
      </button>
      {result && (
        <div className={`mt-4 p-4 rounded ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-bold">{result.message}</p>
          {result.success && result.openPorts.length > 0 && (
            <ul className="list-disc pl-5">
              {result.openPorts.map((port, index) => (
                <li key={index}>Port {port}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default PortScanner;