import React, { useState } from 'react';

// Importing your images directly from the main list
import faceCream from './face_cream2.jpg';
import faceWash from './face_wash_gel.jpg';
import sunScreen from './sun-screen.jpg';
import perfume from './pholerice_perfume.jpg';
import logo from './my_logo.png';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Pholeric Face Cream", price: 250, img: faceCream },
    { id: 2, name: "Face Wash Gel", price: 180, img: faceWash },
    { id: 3, name: "Luxury Sunscreen", price: 220, img: sunScreen },
    { id: 4, name: "Signature Perfume", price: 550, img: perfume }
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
    
    // Using South African country code for the business line
    window.open(`https://wa.me/27123456789?text=${message}`, '_blank');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '430px', margin: '0 auto', backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '100px' }}>
      <header style={{ backgroundColor: '#000', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <img src={logo} alt="GOOD meddler" style={{ height: '30px', marginBottom: '10px' }} />
        <h1 style={{ margin: 0, fontSize: '18px', letterSpacing: '2px' }}>PHOLERIC</h1>
        <p style={{ fontSize: '10px', marginTop: '5px' }}>POWERED BY GOOD meddler</p>
      </header>

      <div style={{ padding: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #f0f0f0', borderRadius: '12px', padding: '10px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img src={product.img} alt={product.name} style={{ width: '100%', borderRadius: '8px', height: '120px', objectFit: 'cover' }} />
            <h4 style={{ fontSize: '13px', margin: '10px 0' }}>{product.name}</h4>
            <p style={{ fontWeight: 'bold', color: '#333' }}>R{product.price}</p>
            <button 
              onClick={() => addToCart(product)} 
              style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '10px', width: '100%', borderRadius: '6px', fontWeight: 'bold' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', padding: '20px', backgroundColor: '#fff', borderTop: '1px solid #eee', boxShadow: '0 -5px 15px rgba(0,0,0,0.05)' }}>
          <button 
            onClick={sendWhatsAppOrder} 
            style={{ width: '100%', padding: '15px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px' }}
          >
            Checkout via WhatsApp (R{calculateTotal()})
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
