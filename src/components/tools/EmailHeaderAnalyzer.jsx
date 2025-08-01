import React, { useState } from 'react';
import axios from 'axios';

const EmailHeaderAnalyzer = () => {
  const [header, setHeader] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const analyzeHeader = async () => {
    if (!header) {
      setResult({ isSuspicious: true, message: 'Please enter an email header', details: {} });
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('/api/analyze-email-header', { header });
      setResult(response.data);
    } catch (error) {
      setResult({ isSuspicious: true, message: 'Error analyzing header', details: {} });
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Email Header Analyzer</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="header">Paste Email Header:</label>
        <textarea
          id="header"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          placeholder="Paste email header here (from Gmail/Outlook 'Show Original')"
          className="w-full p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={analyzeHeader}
        disabled={isLoading}
        className={`w-full p-2 rounded text-white ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isLoading ? 'Analyzing...' : 'Analyze Header'}
      </button>
      {result && (
        <div className={`mt-4 p-4 rounded ${result.isSuspicious ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
          <p className="font-bold">{result.message}</p>
          <p>SPF: {result.details.spf ? 'Pass' : 'Fail'}</p>
          <p>DKIM: {result.details.dkim ? 'Pass' : 'Fail'}</p>
        </div>
      )}
    </div>
  );
};

export default EmailHeaderAnalyzer;