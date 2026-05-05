import React, { useState } from 'react';

// Imports from your root directory
import faceCream from './face_cream2.jpg';
import faceWash from './face_wash_gel.jpg';
import sunScreen from './sun-screen.jpg';
import perfume from './pholeric_perfume.jpg';
import bodyLotion from './body-lotion.jpg';
import oudWood from './oud_wood.jpg';
import logo from './my_logo.png';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Pholeric Face Cream", price: 250, img: faceCream },
    { id: 2, name: "Face Wash Gel", price: 180, img: faceWash },
    { id: 3, name: "Luxury Sunscreen", price: 220, img: sunScreen },
    { id: 4, name: "Signature Perfume", price: 550, img: perfume },
    { id: 5, name: "Body Lotion", price: 150, img: bodyLotion },
    { id: 6, name: "Oud Wood", price: 450, img: oudWood }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

  const sendWhatsAppOrder = () => {
    const total = calculateTotal();
    let message = `*New Order from Pholeric*%0A%0A`;
    cart.forEach((item, i) => message += `${i + 1}. ${item.name} - R${item.price}%0A`);
    message += `%0A*Total: R${total}*`;
    window.open(`https://wa.me/27123456789?text=${message}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Black Header from Screenshot */}
      <header style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '40px 20px' }}>
        <img src={logo} alt="Pholeric" style={{ height: '45px', marginBottom: '15px' }} />
        <h1 style={{ margin: 0, fontSize: '26px', letterSpacing: '4px', fontWeight: 'bold' }}>PHOLERIC</h1>
        <p style={{ margin: '10px 0 0', fontSize: '12px', color: '#ccc', letterSpacing: '1px' }}>POWERED BY GOOD meddler</p>
      </header>

      {/* Product Grid with rounded cards */}
      <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ 
              border: '1px solid #eee', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              padding: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '15px' }} />
            </div>
            <h4 style={{ margin: '15px 0 5px', fontSize: '15px', fontWeight: 'bold' }}>{product.name}</h4>
            <p style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>R{product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              style={{ 
                backgroundColor: '#000', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '8px', 
                padding: '12px 0', 
                width: '100%', 
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Sticky Bottom Checkout for WhatsApp functionality */}
      {cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: 0, width: '100%', padding: '20px', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
          <button 
            onClick={sendWhatsAppOrder}
            style={{ width: '100%', padding: '15px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px' }}
          >
            Checkout (R{calculateTotal()})
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
