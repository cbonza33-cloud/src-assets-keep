import React, { useState, useRef } from 'react';
// Importing the images you uploaded to GitHub
import bodyOil from './assets/body_oil.jpg';
// Add more imports here as you upload them, e.g.:
// import facialCream from './assets/facial_cream.jpg';

const PholericApp = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home'); // home, shop, cart, invoice
  const invoiceRef = useRef();

  // Your product data structure
  const products = [
    {
      id: 1,
      name: "Pholeric Body Oil",
      price: 150,
      img: bodyOil,
      badge: "BESTSELLER",
      description: "Premium African beauty oil for glowing skin."
    },
    // You can add more product objects here following this format
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, orderId: Math.floor(Math.random() * 1000000) }]);
    alert(`${product.name} added to cart!`);
  };

  const calculateTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

  // The WhatsApp checkout logic for local business communication
  const sendWhatsAppOrder = () => {
    const total = calculateTotal();
    let message = `*New Order from Pholeric*%0A%0A`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - R${item.price}%0A`;
    });
    message += `%0A*Total: R${total}*%0A%0AItems ready for collection/delivery.`;
    
    // Replace with your business WhatsApp number
    window.open(`https://wa.me/27123456789?text=${message}`, '_blank');
  };

  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      maxWidth: '430px', // Mobile-first constraint
      margin: '0 auto', 
      backgroundColor: '#f9f9f9', 
      minHeight: '100vh',
      paddingBottom: '80px' 
    }}>
      {/* Header */}
      <header style={{ backgroundColor: '#000', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, letterSpacing: '2px' }}>PHOLERIC</h1>
        <p style={{ fontSize: '12px', margin: '5px 0 0' }}>AFRICAN BEAUTY</p>
      </header>

      {/* Navigation & Views */}
      <div style={{ padding: '20px' }}>
        {view === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <h2>Welcome to Pholeric</h2>
            <p>High-performance beauty products for your skin.</p>
            <button 
              onClick={() => setView('shop')}
              style={{ backgroundColor: '#000', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '5px' }}
            >
              Shop Now
            </button>
          </div>
        )}

        {view === 'shop' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {products.map(product => (
              <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <div style={{ padding: '10px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#d4af37' }}>{product.badge}</span>
                  <h4 style={{ margin: '5px 0' }}>{product.name}</h4>
                  <p style={{ fontWeight: 'bold' }}>R{product.price}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    style={{ width: '100%', padding: '8px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '5px' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'cart' && (
          <div>
            <h3>Your Shopping Cart ({cart.length} items)</h3>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                <span>{item.name}</span>
                <span>R{item.price}</span>
              </div>
            ))}
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <h4>Total: R{calculateTotal()}</h4>
              <button 
                onClick={sendWhatsAppOrder}
                style={{ width: '100%', padding: '15px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}
              >
                Checkout via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <nav style={{ 
        position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', 
        backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', 
        padding: '15px 0', borderTop: '1px solid #ddd', zIndex: 100 
      }}>
        <button onClick={() => setView('home')} style={{ background: 'none', border: 'none' }}>🏠</button>
        <button onClick={() => setView('shop')} style={{ background: 'none', border: 'none' }}>🛍️</button>
        <button onClick={() => setView('cart')} style={{ background: 'none', border: 'none' }}>🛒 ({cart.length})</button>
      </nav>
    </div>
  );
};

export default PholericApp;
