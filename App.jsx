import React, { useState } from 'react';

// Importing every asset from your root directory
import faceCream2 from './face_cream2.jpg';
import faceWash from './face_wash_gel.jpg';
import sunScreen from './sun-screen.jpg';
import perfume from './pholeric_perfume.jpg';
import bodyLotion from './body-lotion.jpg';
import bodyLotion2 from './body-lotion2.jpg';
import faceCare from './face_care.jpg';
import faceCream from './face_cream2.jpg';
import honeyAlmond from './honey_almond_bod...'; // Check if filename ends in .jpg
import milkHoney from './milk_honey_glow-r...';
import oilControl from './oil-control.jpg';
import oudWood from './oud_wood.jpg';
import patchouli from './patchouli.jpg';
import patchouli2 from './patchouli2.jpg';
import logo from './my_logo.png';

const PholericApp = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home'); 

  const products = [
    { id: 1, name: "Face Cream 2", price: 250, img: faceCream2, badge: "BESTSELLER" },
    { id: 2, name: "Face Wash Gel", price: 180, img: faceWash, badge: "NEW" },
    { id: 3, name: "Sun Screen", price: 220, img: sunScreen, badge: "ESSENTIAL" },
    { id: 4, name: "Pholeric Perfume", price: 550, img: perfume, badge: "LUXURY" },
    { id: 5, name: "Body Lotion", price: 150, img: bodyLotion, badge: "POPULAR" },
    { id: 6, name: "Body Lotion 2", price: 160, img: bodyLotion2, badge: "NEW" },
    { id: 7, name: "Face Care", price: 210, img: faceCare, badge: "PRO" },
    { id: 8, name: "Oil Control", price: 190, img: oilControl, badge: "TOP" },
    { id: 9, name: "Oud Wood", price: 450, img: oudWood, badge: "ELITE" },
    { id: 10, name: "Patchouli", price: 300, img: patchouli, badge: "GIFT" },
    { id: 11, name: "Patchouli 2", price: 320, img: patchouli2, badge: "GIFT" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const calculateTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

  const sendWhatsAppOrder = () => {
    const total = calculateTotal();
    let message = `*New Order from Pholeric*%0A%0A`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - R${item.price}%0A`;
    });
    message += `%0A*Total: R${total}*`;
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
            <p>Luxury beauty products for your skin.</p>
            <button onClick={() => setView('shop')} style={{ backgroundColor: '#000', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '5px' }}>Shop Now</button>
          </div>
        )}

        {view === 'shop' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {products.map(product => (
              <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                <div style={{ padding: '10px' }}>
                  <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#d4af37' }}>{product.badge}</span>
                  <h4 style={{ margin: '5px 0', fontSize: '13px' }}>{product.name}</h4>
                  <p style={{ fontWeight: 'bold' }}>R{product.price}</p>
                  <button onClick={() => addToCart(product)} style={{ width: '100%', padding: '8px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '11px' }}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'cart' && (
          <div>
            <h3>Your Cart ({cart.length})</h3>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                <span>{item.name}</span>
                <span>R{item.price}</span>
              </div>
            ))}
            <button onClick={sendWhatsAppOrder} style={{ width: '100%', marginTop: '20px', padding: '15px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '5px' }}>Checkout via WhatsApp (R{calculateTotal()})</button>
          </div>
        )}
      </div>

      <nav style={{ position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #ddd' }}>
        <button onClick={() => setView('home')} style={{ background: 'none', border: 'none' }}>🏠</button>
        <button onClick={() => setView('shop')} style={{ background: 'none', border: 'none' }}>🛍️</button>
        <button onClick={() => setView('cart')} style={{ background: 'none', border: 'none' }}>🛒</button>
      </nav>
    </div>
  );
};

export default PholericApp;
