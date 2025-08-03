const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Mengizinkan akses dari frontend
app.use(express.json({ limit: '10mb' })); // Menerima JSON hingga 10MB (untuk file besar)
app.use(express.urlencoded({ extended: true }));

// Endpoint untuk FileHashChecker
app.post('/api/file-hash-checker', async (req, res) => {
  try {
    const { data, algorithm } = req.body;

    // Validasi input
    if (!data || !algorithm) {
      return res.status(400).json({ error: 'Data dan algoritma harus disediakan' });
    }
    if (!['md5', 'sha1', 'sha256', 'sha512'].includes(algorithm)) {
      return res.status(400).json({ error: 'Algoritma tidak didukung. Gunakan: md5, sha1, sha256, atau sha512' });
    }

    // Hitung hash
    const hash = crypto.createHash(algorithm).update(data).digest('hex');
    res.json({ hash });
  } catch (error) {
    console.error('Error in file-hash-checker:', error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
});


// Endpoint uji coba
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server berjalan' });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});