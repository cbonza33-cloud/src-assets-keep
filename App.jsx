import React, { useState, useRef } from 'react';

// Unified imports for your root directory files
import faceCream2 from './face_cream2.jpg';
import faceWash from './face_wash_gel.jpg';
import sunScreen from './sun-screen.jpg';
import perfume from './pholeric_perfume.jpg';
import bodyLotion from './body-lotion.jpg';
import bodyLotion2 from './body-lotion2.jpg';
import faceCare from './face_care.jpg';
import honeyAlmond from './honey_almond_bod...'; 
import oilControl from './oil-control.jpg';
import oudWood from './oud_wood.jpg';
import patchouli from './patchouli.jpg';
import patchouli2 from './patchouli2.jpg';
import logo from './my_logo.png';

const PholericApp = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home'); 
  const invoiceRef = useRef();

  const products = [
    { id: 1, name: "Pholeric Body Oil", price: 150, img: faceCream2, badge: "BESTSELLER", description: "Premium African beauty oil." },
    { id: 2, name: "Face Wash Gel", price: 180, img: faceWash, badge: "NEW", description: "Deep cleansing." },
    { id: 3, name: "Luxury Sunscreen", price: 220, img: sunScreen, badge: "ESSENTIAL", description: "Daily protection." },
    { id: 4, name: "Signature Perfume", price: 550, img: perfume, badge: "LUXURY", description: "Long-lasting essence." },
    { id: 5, name: "Body Lotion", price: 150, img: bodyLotion, badge: "POPULAR" },
    { id: 6, name: "Oud Wood", price: 450, img: oudWood, badge: "ELITE" },
    { id: 7, name: "Patchouli", price: 300, img: patchouli, badge: "GIFT" }
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, orderId: Math.floor(Math.random() * 1000000) }]);
    alert(`${product.name} added to cart!`);
  };

  const calculateTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

  const sendWhatsAppOrder = () => {
    const total = calculateTotal();
    let message = `*New Order from Pholeric*%0A%0A`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - R${item.price}%0A`;
    });
    message += `%0A*Total: R${total}*%0A%0AItems ready for collection/delivery.`;
    
    // South African country code for Pholeric business line
    window.open(`https://wa.me/27123456789?text=${message}`, '_blank');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '430px', margin: '0 auto', backgroundColor: '#f9f9f9', minHeight: '100vh', paddingBottom: '80px' }}>
      <header style={{ backgroundColor: '#000', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, letterSpacing: '2px' }}>PHOLERIC</h1>
        <p style={{ fontSize: '12px', margin: '5px 0 0' }}>AFRICAN BEAUTY</p>
      </header>

      <div style={{ padding: '20px' }}>
        {view === 'home' && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <h2>Welcome to Pholeric</h2>
            <p>High-performance beauty products for your skin.</p>
            <button onClick={() => setView('shop')} style={{ backgroundColor: '#000', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '5px', marginTop: '20px' }}>Shop Now</button>
          </div>
        )}

        {view === 'shop' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {products.map(product => (
              <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                <div style={{ padding: '10px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#d4af37' }}>{product.badge}</span>
                  <h4 style={{ margin: '5px 0', fontSize: '14px' }}>{product.name}</h4>
                  <p style={{ fontWeight: 'bold', fontSize: '14px' }}>R{product.price}</p>
                  <button onClick={() => addToCart(product)} style={{ width: '100%', padding: '8px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '12px' }}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'cart' && (
          <div>
            <h3>Your Shopping Cart ({cart.length})</h3>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                <span>{item.name}</span>
                <span>R{item.price}</span>
              </div>
            ))}
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <h4>Total: R{calculateTotal()}</h4>
              <button onClick={sendWhatsAppOrder} style={{ width: '100%', padding: '15px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Checkout via WhatsApp</button>
            </div>
          </div>
        )}
      </div>

      <nav style={{ position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #ddd', zIndex: 100 }}>
        <button onClick={() => setView('home')} style={{ background: 'none', border: 'none', fontSize: '20px' }}>🏠</button>
        <button onClick={() => setView('shop')} style={{ background: 'none', border: 'none', fontSize: '20px' }}>🛍️</button>
        <button onClick={() => setView('cart')} style={{ background: 'none', border: 'none', fontSize: '20px' }}>🛒 ({cart.length})</button>
      </nav>
    </div>
  );
};

export default PholericApp;
