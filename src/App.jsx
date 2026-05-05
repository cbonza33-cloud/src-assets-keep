import React, { useState } from 'react';

// Importing images directly from the root
import faceCream from './face_cream2.jpg';
import faceWash from './face_wash_gel.jpg';
import sunScreen from './sun-screen.jpg';
import perfume from './pholerice_perfume.jpg';
import logo from './my_logo.png';

const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('shop'); 

  const products = [
    { id: 1, name: "Luxury Face Cream", price: 250, img: faceCream },
    { id: 2, name: "Gentle Face Wash", price: 180, img: faceWash },
    { id: 3, name: "Daily Sunscreen", price: 220, img: sunScreen },
    { id: 4, name: "Pholeric Signature Perfume", price: 550, img: perfume },
    { id: 5, name: "Organic Shea Butter", price: 150, img: faceCream } // Wildcard option
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
    // Using South African country code for WhatsApp
    window.open(`https://wa.me/27123456789?text=${message}`, '_blank');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '430px', margin: '0 auto', backgroundColor: '#fff', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#000', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <img src={logo} alt="Pholeric" style={{ height: '40px' }} />
        <h1 style={{ margin: 0, fontSize: '20px', letterSpacing: '2px' }}>PHOLERIC</h1>
      </header>

      <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <img src={product.img} alt={product.name} style={{ width: '100%', borderRadius: '5px' }} />
            <h4 style={{ fontSize: '14px', margin: '10px 0' }}>{product.name}</h4>
            <p>R{product.price}</p>
            <button onClick={() => addToCart(product)} style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '8px', width: '100%', borderRadius: '4px' }}>Add</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', padding: '20px', backgroundColor: '#fff', borderTop: '2px solid #000' }}>
          <button onClick={sendWhatsAppOrder} style={{ width: '100%', padding: '15px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
            Order via WhatsApp (R{calculateTotal()})
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
