// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Izinkan koneksi dari semua domain (CORS)
app.use(cors());

// Data produk-contoh (gantilah dengan data asli dari API)
const products = [
  {
    id: 1,
    name: 'Sepatu Sneakers',
    price: 100,
    image: 'sneakers.jpg',
  },
  {
    id: 2,
    name: 'Pakaian T-shirt',
    price: 30,
    image: 'tshirt.jpg',
  },
  // Tambahkan produk lainnya di sini
];

// Mendefinisikan rute API untuk mendapatkan daftar produk
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
