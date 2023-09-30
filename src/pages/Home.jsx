import React from 'react';
import '../style/home.css'; // Impor file CSS untuk halaman Home

function Home() {
  // Data produk-contoh (bisa diganti dengan data asli dari API)
  const products = [
    {
      id: 1,
      name: 'Sepatu Sneakers',
      price: 100,
      image: '03.jpg',
    },
    {
      id: 2,
      name: 'Pakaian T-shirt',
      price: 30,
      image: '03.jpg',
    },
    // Tambahkan produk lainnya di sini
  ];

  return (
    <div>
      <h1>Selamat Datang di Toko Kami</h1>
      <p>Temukan koleksi terbaik kami dari pakaian dan sepatu.</p>

      <h2>Produk Terbaru</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Harga: ${product.price}</p>
            <button>Beli</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
