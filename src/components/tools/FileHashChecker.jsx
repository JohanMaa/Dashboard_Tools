import React, { useState } from 'react';
import axios from 'axios';

const FileHashChecker = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const checkHash = async () => {
    if (!file) {
      setResult({ success: false, message: 'Please select a file', hash: '' });
      return;
    }
    setIsLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const fileContent = btoa(e.target.result); // Base64 encode
        try {
          const response = await axios.post('/api/check-file-hash', { fileContent });
          setResult(response.data);
        } catch (error) {
          setResult({ success: false, message: 'Error checking file hash', hash: '' });
        }
        setIsLoading(false);
      };
      reader.readAsBinaryString(file);
    } catch (error) {
      setResult({ success: false, message: 'Error reading file', hash: '' });
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">File Hash Checker</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="file">Select File:</label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={checkHash}
        disabled={isLoading}
        className={`w-full p-2 rounded text-white ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isLoading ? 'Checking...' : 'Check Hash'}
      </button>
      {result && (
        <div className={`mt-4 p-4 rounded ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-bold">{result.message}</p>
          {result.success && <p>SHA256: {result.hash}</p>}
        </div>
      )}
    </div>
  );
};

export default FileHashChecker;