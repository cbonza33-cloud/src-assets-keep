import React, { useState } from 'react';

// Imports - ensure these names match your files exactly
import faceCream from './face_cream2.jpg';
import faceWash from './face_wash_gel.jpg';
import sunScreen from './sun-screen.jpg';
import perfume from './pholeric_perfume.jpg';
import bodyLotion from './body-lotion.jpg'; // New
import bodyLotion2 from './body-lotion2.jpg'; // New
import oudWood from './oud_wood.jpg'; // New
import logo from './my_logo.png';

const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('shop'); 

  // THIS LIST CONTROLS WHAT SHOWS ON SCREEN
  const products = [
    { id: 1, name: "Pholeric Face Cream", price: 250, img: faceCream },
    { id: 2, name: "Face Wash Gel", price: 180, img: faceWash },
    { id: 3, name: "Luxury Sunscreen", price: 220, img: sunScreen },
    { id: 4, name: "Signature Perfume", price: 550, img: perfume },
    { id: 5, name: "Body Lotion", price: 150, img: bodyLotion },
    { id: 6, name: "Glow Lotion", price: 160, img: bodyLotion2 },
    { id: 7, name: "Oud Wood Perfume", price: 450, img: oudWood }
  ];

  const addToCart = (p) => {
    setCart([...cart, p]);
    alert(`${p.name} added!`);
  };

  const sendOrder = () => {
    let msg = `*PHOLERIC ORDER*%0A%0A`;
    cart.forEach((item, i) => msg += `${i + 1}. ${item.name} - R${item.price}%0A`);
    msg += `%0A*Total: R${cart.reduce((s, i) => s + i.price, 0)}*`;
    window.open(`https://wa.me/27123456789?text=${msg}`, '_blank');
  };

  return (
    <div style={{ maxWidth: '430px', margin: '0 auto', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '50px 20px 30px' }}>
        <img src={logo} alt="Logo" style={{ width: '40px', marginBottom: '10px' }} />
        <h1 style={{ margin: 0, fontSize: '24px', letterSpacing: '4px' }}>PHOLERIC</h1>
        <p style={{ margin: '5px 0 0', fontSize: '10px', opacity: 0.6 }}>POWERED BY GOOD meddler</p>
      </header>

      <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', paddingBottom: '100px' }}>
        {products.map(product => (
          <div key={product.id} style={{ textAlign: 'center' }}>
            <div style={{ border: '1px solid #f2f2f2', borderRadius: '20px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '12px' }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', borderRadius: '12px' }} />
            </div>
            <h4 style={{ fontSize: '14px', margin: '5px 0' }}>{product.name}</h4>
            <p style={{ fontWeight: 'bold', margin: '5px 0' }}>R{product.price}</p>
            <button onClick={() => addToCart(product)} style={{ width: '100%', backgroundColor: '#000', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold' }}>Add to Cart</button>
          </div>
        ))}
      </div>

      <nav style={{ position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', padding: '20px 0', borderTop: '1px solid #eee' }}>
        <button onClick={() => setView('shop')} style={{ background: 'none', border: 'none', fontSize: '24px' }}>🛍️</button>
        <button onClick={sendOrder} style={{ background: 'none', border: 'none', fontSize: '24px' }}>🛒 ({cart.length})</button>
      </nav>
    </div>
  );
};

export default App;
