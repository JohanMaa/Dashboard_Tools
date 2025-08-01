export const tools = {
  'phishing-checker': {
    component: 'PhishingChecker',
    name: 'Phishing Checker',
    description: 'Alat ini membantu Anda memeriksa apakah sebuah tautan (URL) aman atau berpotensi merupakan penipuan (phishing). Dengan teknologi analisis canggih, alat ini memindai tautan untuk mendeteksi tanda-tanda bahaya, seperti situs web palsu yang mencoba mencuri informasi pribadi Anda, seperti kata sandi atau data kartu kredit.',
    subtitle: 'Masukkan URL untuk memeriksa potensi ancaman phishing.',
    definition: 'Phishing Checker adalah alat untuk mengidentifikasi URL yang berpotensi berbahaya dengan menganalisis pola, reputasi domain, dan konten halaman untuk mendeteksi tanda-tanda phishing, seperti penipuan identitas atau pencurian data.',
    usage: [
      'Memeriksa tautan yang Anda terima melalui email atau media sosial untuk memastikan tautan tersebut aman sebelum diklik.',
      'Melindungi informasi pribadi Anda dari situs web palsu yang dirancang untuk menipu dan mencuri data seperti kata sandi, nomor kartu kredit, atau informasi bank.',
      'Membantu perusahaan atau organisasi memverifikasi tautan mencurigakan yang ditemukan dalam komunikasi bisnis untuk mencegah serangan siber.'
    ],
    howItWorks: [
      'Anda memasukkan tautan (URL) yang ingin diperiksa, kemudian alat ini membandingkannya dengan database ancaman terbaru yang berisi daftar situs web berbahaya yang dikenal.',
      'Alat ini memeriksa struktur tautan, seperti bagian subdomain atau karakter aneh yang sering digunakan oleh penipu, untuk menemukan pola yang mencurigakan.',
      'Setelah analisis selesai, Anda akan menerima laporan yang menunjukkan apakah tautan tersebut aman atau berisiko, lengkap dengan skor keamanan dan penjelasan tentang potensi bahaya.'
    ]
  },
  'email-header-analyzer': {
    component: 'EmailHeaderAnalyzer',
    name: 'Email Header Analyzer',
    description: 'Alat ini memungkinkan Anda untuk memeriksa informasi tersembunyi di dalam header email untuk mengetahui apakah email tersebut asli atau mungkin merupakan penipuan (spoofing). Header email berisi detail seperti dari mana email dikirim dan rute yang dilaluinya, sehingga Anda dapat mendeteksi apakah email berasal dari sumber tepercaya.',
    subtitle: 'Tempel header email untuk menganalisis asal dan keaslian email.',
    definition: 'Email Header Analyzer adalah alat yang memeriksa metadata dalam header email untuk mengidentifikasi asal, rute, dan potensi tanda-tanda spoofing atau manipulasi.',
    usage: [
      'Mengidentifikasi email penipuan yang berpura-pura dikirim dari seseorang yang Anda kenal, seperti bank atau kolega, untuk mencegah Anda menjadi korban phishing.',
      'Memastikan bahwa email dari mitra bisnis atau klien benar-benar berasal dari mereka, sehingga Anda dapat mempercayai isi email tersebut.',
      'Membantu tim keamanan siber dalam menyelidiki email mencurigakan untuk menemukan sumber ancaman atau pelanggaran keamanan.'
    ],
    howItWorks: [
      'Anda menyalin header email dari aplikasi email Anda (seperti Gmail atau Outlook) dan menempelkannya ke alat ini, yang kemudian menguraikan informasi seperti server pengirim dan jalur pengiriman.',
      'Alat ini memeriksa tanda-tanda penipuan, seperti ketidaksesuaian antara domain pengirim dan alamat email yang ditampilkan, atau masalah dengan pengaturan keamanan seperti SPF dan DKIM.',
      'Setelah analisis, Anda akan menerima laporan yang menjelaskan apakah email tersebut asli, mencurigakan, atau berpotensi berbahaya, dengan detail tentang rute dan keamanannya.'
    ]
  },
  'ip-checker': {
    component: 'IPChecker',
    name: 'IP Checker',
    description: 'Alat ini memungkinkan Anda untuk memeriksa informasi tentang alamat IP, seperti lokasi geografisnya, penyedia layanan internet, dan apakah IP tersebut pernah terlibat dalam aktivitas mencurigakan. Ini sangat berguna untuk memahami sumber koneksi jaringan atau server yang Anda temui.',
    subtitle: 'Masukkan alamat IP untuk memeriksa reputasi dan lokasi.',
    definition: 'IP Checker adalah alat untuk menganalisis alamat IP, memberikan informasi tentang lokasi, reputasi, dan potensi ancaman terkait IP tersebut.',
    usage: [
      'Memeriksa apakah alamat IP yang terhubung ke perangkat atau situs web Anda memiliki riwayat aktivitas berbahaya, seperti serangan siber atau pengiriman spam.',
      'Mengetahui lokasi geografis server atau perangkat yang terkait dengan alamat IP, misalnya untuk memverifikasi lokasi server situs web.',
      'Membantu administrator jaringan memantau lalu lintas jaringan untuk mendeteksi aktivitas tidak biasa atau ancaman keamanan.'
    ],
    howItWorks: [
      'Anda memasukkan alamat IP yang ingin diperiksa, dan alat ini mengambil informasi dari database reputasi IP yang diperbarui secara berkala.',
      'Alat ini menampilkan detail seperti penyedia layanan internet (ISP), lokasi geografis (kota atau negara), dan riwayat ancaman yang terkait dengan IP tersebut.',
      'Anda akan menerima rekomendasi, seperti apakah IP perlu diblokir atau dipantau lebih lanjut, berdasarkan tingkat risikonya.'
    ]
  },
  'cve-search': {
    component: 'CVESearch',
    name: 'CVE Search',
    description: 'Alat ini membantu Anda mencari informasi tentang kerentanan keamanan pada perangkat lunak atau sistem operasi yang Anda gunakan, berdasarkan database resmi Common Vulnerabilities and Exposures (CVE). Ini memungkinkan Anda untuk mengetahui apakah perangkat lunak Anda rentan terhadap serangan siber.',
    subtitle: 'Masukkan ID CVE atau nama software untuk mencari kerentanan.',
    definition: 'CVE Search adalah alat untuk mencari informasi tentang kerentanan perangkat lunak berdasarkan database Common Vulnerabilities and Exposures (CVE).',
    usage: [
      'Menemukan kerentanan keamanan pada perangkat lunak atau sistem operasi yang digunakan di komputer atau server Anda, sehingga Anda dapat mengambil tindakan pencegahan.',
      'Membantu tim keamanan siber merencanakan pembaruan atau tambalan (patch) untuk melindungi sistem dari serangan yang memanfaatkan kerentanan.',
      'Memantau informasi terbaru tentang kerentanan baru yang dapat memengaruhi perangkat lunak tertentu dalam organisasi Anda.'
    ],
    howItWorks: [
      'Anda memasukkan nomor ID CVE (misalnya, CVE-2023-1234) atau nama perangkat lunak (misalnya, "Apache" atau "Windows") ke dalam alat ini.',
      'Alat ini mencari informasi di database CVE resmi dan menampilkan detail seperti deskripsi kerentanan, tingkat keparahan, dan perangkat lunak yang terpengaruh.',
      'Anda akan menerima saran tentang cara memperbaiki kerentanan, seperti menginstal pembaruan perangkat lunak atau menerapkan langkah-langkah keamanan tambahan.'
    ]
  },
  'whois-lookup': {
    component: 'WhoisLookup',
    name: 'WHOIS Lookup',
    description: 'Alat ini memungkinkan Anda untuk melihat informasi tentang pemilik sebuah domain, seperti nama, organisasi, atau tanggal registrasi. Ini sangat berguna untuk memverifikasi keabsahan sebuah situs web atau menyelidiki domain yang mencurigakan.',
    subtitle: 'Masukkan nama domain untuk melihat informasi kepemilikan.',
    definition: 'WHOIS Lookup adalah alat untuk mengambil informasi kepemilikan domain, seperti nama pemilik, registrar, dan tanggal registrasi, dari database WHOIS.',
    usage: [
      'Memverifikasi apakah sebuah situs web dimiliki oleh orang atau organisasi yang sah, misalnya saat Anda menerima email dari domain yang tidak dikenal.',
      'Menyelidiki domain yang mencurigakan untuk mengetahui riwayat registrasinya, seperti kapan domain dibuat atau apakah sering berpindah tangan.',
      'Membantu analisis keamanan situs web untuk memastikan bahwa domain tersebut tidak digunakan untuk aktivitas penipuan.'
    ],
    howItWorks: [
      'Anda memasukkan nama domain (misalnya, example.com) ke dalam alat ini, dan alat ini menghubungi server WHOIS untuk mengambil data terkait.',
      'Alat ini menampilkan informasi seperti nama pemilik, kontak registrar, tanggal registrasi, dan status domain (aktif atau kedaluwarsa).',
      'Anda akan menerima laporan ringkas yang dapat digunakan untuk analisis lebih lanjut, seperti memeriksa apakah domain tersebut terkait dengan aktivitas mencurigakan.'
    ]
  },
  'dns-lookup': {
    component: 'DNSLookup',
    name: 'DNS Lookup',
    description: 'Alat ini membantu Anda memeriksa informasi tentang pengaturan Domain Name System (DNS) sebuah situs web, seperti alamat IP atau server email yang terkait. Ini berguna untuk memahami cara kerja jaringan sebuah domain atau mendeteksi masalah koneksi.',
    subtitle: 'Masukkan domain atau IP untuk memeriksa catatan DNS.',
    definition: 'DNS Lookup adalah alat untuk memeriksa catatan Domain Name System (DNS) seperti A, MX, atau NS untuk memahami konfigurasi jaringan domain.',
    usage: [
      'Mendiagnosis masalah koneksi situs web atau email dengan memeriksa pengaturan DNS untuk memastikan semuanya dikonfigurasi dengan benar.',
      'Mengetahui server mana yang digunakan untuk menjalankan situs web atau mengirim email dari sebuah domain, misalnya untuk keperluan administrasi jaringan.',
      'Membantu penyelidikan keamanan dengan memeriksa apakah pengaturan DNS menunjukkan tanda-tanda penyalahgunaan, seperti server yang tidak sah.'
    ],
    howItWorks: [
      'Anda memasukkan nama domain (misalnya, example.com) atau alamat IP, dan alat ini mengambil catatan DNS dari server otoritatif yang mengelola domain tersebut.',
      'Alat ini menampilkan informasi seperti alamat IP situs web (catatan A), server email (catatan MX), atau server nama (catatan NS).',
      'Anda dapat memilih jenis catatan DNS yang ingin diperiksa, dan alat ini memberikan laporan lengkap untuk membantu analisis atau pemecahan masalah.'
    ]
  },
  'ssl-certificate-checker': {
    component: 'SSLCertificateChecker',
    name: 'SSL Certificate Checker',
    description: 'Alat ini memungkinkan Anda untuk memeriksa sertifikat keamanan (SSL audition-2025-07-31-02:02:00 SSL/TLS) sebuah situs web untuk memastikan bahwa koneksi ke situs tersebut aman dan terenkripsi. Ini membantu Anda mengetahui apakah situs web yang Anda kunjungi memiliki keamanan yang valid.',
    subtitle: 'Masukkan URL atau hostname untuk memeriksa sertifikat SSL.',
    definition: 'SSL Certificate Checker adalah alat untuk memeriksa validitas sertifikat SSL/TLS pada situs web, termasuk masa berlaku, issuer, dan konfigurasi keamanan.',
    usage: [
      'Memastikan bahwa situs web yang Anda kunjungi menggunakan koneksi aman, sehingga data Anda (seperti kata sandi atau informasi kartu kredit) terlindungi dari penyadapan.',
      'Memeriksa kapan sertifikat keamanan situs web akan kedaluwarsa, sehingga Anda dapat merencanakan pembaruan untuk menjaga situs tetap aman.',
      'Mendeteksi masalah pada pengaturan keamanan situs web, seperti sertifikat yang salah dikonfigurasi, untuk mencegah risiko keamanan.'
    ],
    howItWorks: [
      'Anda memasukkan URL atau nama host situs web (misalnya, example.com), dan alat ini mengambil informasi sertifikat SSL/TLS dari server situs tersebut.',
      'Alat ini memeriksa detail sertifikat, seperti organisasi yang menerbitkannya, tanggal kedaluwarsa, dan pengaturan enkripsi yang digunakan.',
      'Anda akan menerima laporan yang menjelaskan apakah sertifikat tersebut valid, aman, atau memiliki masalah yang perlu diperbaiki untuk menjaga keamanan koneksi.'
    ]
  },
  'traceroute-tool': {
    component: 'TracerouteTool',
    name: 'Traceroute Tool',
    description: 'Alat ini membantu Anda melacak jalur yang ditempuh data dari komputer Anda ke server tujuan di internet, menunjukkan setiap titik (hop) yang dilewati dan waktu yang dibutuhkan. Ini berguna untuk mendiagnosis masalah koneksi jaringan atau memahami rute jaringan.',
    subtitle: 'Masukkan IP atau hostname untuk melacak rute jaringan.',
    definition: 'Traceroute Tool adalah alat untuk melacak jalur paket data dari perangkat Anda ke host tujuan, menampilkan setiap hop jaringan dan latensinya.',
    usage: [
      'Mendiagnosis mengapa Anda kesulitan mengakses situs web atau server, seperti saat koneksi lambat atau gagal, dengan melihat di mana masalah terjadi.',
      'Mengetahui rute yang ditempuh data Anda untuk mencapai server tujuan, misalnya untuk memahami bagaimana data berpindah di internet.',
      'Membantu administrator jaringan menganalisis performa jaringan untuk memastikan koneksi berjalan lancar dan efisien.'
    ],
    howItWorks: [
      'Anda memasukkan alamat IP atau nama host tujuan, dan alat ini mengirimkan paket data dengan waktu hidup (TTL) yang meningkat secara bertahap.',
      'Setiap titik jaringan (hop) yang dilewati akan merespons, dan alat ini merekam alamat IP serta waktu respons dari setiap hop tersebut.',
      'Alat ini menampilkan daftar lengkap rute jaringan dan waktu yang dibutuhkan, membantu Anda mengidentifikasi titik masalah atau memahami jalur koneksi.'
    ]
  },
  'port-scanner': {
    component: 'PortScanner',
    name: 'Port Scanner',
    description: 'Alat ini memindai port pada sebuah server atau perangkat untuk mengetahui layanan apa yang sedang berjalan, seperti web atau email. Ini membantu Anda memahami keamanan jaringan atau mendeteksi potensi kerentanan.',
    subtitle: 'Masukkan IP atau hostname untuk memindai port terbuka.',
    definition: 'Port Scanner adalah alat untuk memindai port terbuka pada host untuk mengidentifikasi layanan yang berjalan atau potensi kerentanan.',
    usage: [
      'Menemukan layanan apa yang berjalan pada server, misalnya server web atau email, untuk memastikan hanya layanan yang diperlukan yang aktif.',
      'Memeriksa keamanan jaringan dengan mendeteksi port terbuka yang mungkin dapat dimanfaatkan oleh penyerang untuk masuk ke sistem.',
      'Membantu administrator jaringan mengatur firewall dengan mengetahui port mana yang perlu ditutup untuk meningkatkan keamanan.'
    ],
    howItWorks: [
      'Anda memasukkan alamat IP atau nama host, dan alat ini memindai rentang port (seperti port 80 untuk web atau 25 untuk email) untuk memeriksa statusnya.',
      'Alat ini menentukan apakah port terbuka (digunakan oleh layanan), tertutup, atau difilter (diblokir oleh firewall), memberikan gambaran tentang aktivitas server.',
      'Anda akan menerima laporan yang mencantumkan port yang terbuka beserta layanan yang terkait, sehingga Anda dapat mengambil tindakan untuk mengamankan sistem.'
    ]
  },
  'file-hash-checker': {
    component: 'FileHashChecker',
    name: 'File Hash Checker',
    description: 'Alat ini membantu Anda memeriksa keaslian file atau teks dengan menghitung nilai hash (seperti MD5, SHA-1, SHA-256, atau SHA-512) dan membandingkannya dengan nilai asli. Ini memastikan bahwa file tidak diubah atau rusak selama pengunduhan atau penyimpanan.',
    subtitle: 'Unggah file atau masukkan teks untuk menghitung nilai hash.',
    definition: 'File Hash Checker adalah alat untuk menghitung nilai hash (MD5, SHA-1, SHA-256, SHA-512) dari file atau teks, serta memverifikasi integritas data dengan membandingkan hash yang dihasilkan dengan nilai referensi.',
    usage: [
      'Memastikan bahwa file yang Anda unduh dari internet, seperti perangkat lunak atau dokumen, sama persis dengan file asli tanpa perubahan atau kerusakan.',
      'Mendeteksi apakah file atau teks telah diubah secara sengaja, misalnya oleh malware atau pihak yang tidak berwenang, untuk menjaga keamanan data.',
      'Mendukung investigasi forensik digital dengan memverifikasi keaslian file untuk memastikan bahwa data tersebut dapat dipercaya dalam analisis keamanan.'
    ],
    howItWorks: [
      'Anda memilih algoritma hash yang diinginkan (seperti MD5, SHA-1, SHA-256, atau SHA-512) dan mengunggah file atau memasukkan teks yang ingin diperiksa.',
      'Alat ini menghitung nilai hash, yaitu rangkaian karakter unik yang dihasilkan dari konten file atau teks, seperti sidik jari digital untuk data tersebut.',
      'Anda dapat membandingkan nilai hash yang dihasilkan dengan nilai hash referensi dari sumber asli untuk memastikan file atau teks tidak diubah atau rusak.'
    ]
  },
};

export const privacyContent = `
Kebijakan Privasi CyberTools

Kami di CyberTools berkomitmen untuk melindungi privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan platform kami.

1. **Informasi yang Kami Kumpulkan**:
   - Data yang Anda masukkan ke dalam tools kami (misalnya, URL, header email, alamat IP) hanya digunakan untuk analisis keamanan.
   - Informasi teknis seperti alamat IP perangkat, jenis browser, dan waktu akses dapat dikumpulkan untuk meningkatkan layanan.

2. **Penggunaan Informasi**:
   - Data yang diinput digunakan untuk memberikan hasil analisis keamanan.
   - Kami tidak membagikan data pribadi Anda dengan pihak ketiga kecuali diwajibkan oleh hukum.

3. **Keamanan Data**:
   - Kami menggunakan enkripsi dan praktik keamanan terbaik untuk melindungi data Anda.
   - Data yang diinput dihapus setelah analisis selesai, kecuali Anda memilih untuk menyimpan riwayat analisis.

4. **Hak Anda**:
   - Anda dapat meminta penghapusan data yang tersimpan dengan menghubungi kami.
   - Kami menyediakan opsi untuk menggunakan tools tanpa menyimpan data permanen.

5. **Kontak**:
   - Jika Anda memiliki pertanyaan tentang kebijakan privasi, hubungi kami melalui halaman Contact.

Kebijakan ini diperbarui pada 30 Juli 2025.
`;