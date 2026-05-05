import React, { useState } from 'react';

// Using your root directory assets
import faceCream from './face_cream2.jpg';
import faceWash from './face_wash_gel.jpg';
import sunScreen from './sun-screen.jpg';
import perfume from './pholeric_perfume.jpg';
import logo from './my_logo.png';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Pholeric Face Cream", price: 250, img: faceCream },
    { id: 2, name: "Face Wash Gel", price: 180, img: faceWash },
    { id: 3, name: "Luxury Sunscreen", price: 220, img: sunScreen },
    { id: 4, name: "Signature Perfume", price: 550, img: perfume }
  ];

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: '-apple-system, sans-serif' }}>
      
      {/* Exact Header from image_8.png */}
      <header style={{ 
        backgroundColor: '#000', 
        color: '#fff', 
        textAlign: 'center', 
        padding: '35px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <img src={logo} alt="Logo" style={{ width: '45px', marginBottom: '15px' }} />
        <h1 style={{ margin: 0, fontSize: '28px', letterSpacing: '5px', fontWeight: '900' }}>PHOLERIC</h1>
        <p style={{ margin: '8px 0 0', fontSize: '11px', letterSpacing: '1px', opacity: 0.8 }}>POWERED BY GOOD meddler</p>
      </header>

      {/* The Product Grid */}
      <div style={{ 
        padding: '25px 15px', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        columnGap: '15px', 
        rowGap: '30px' 
      }}>
        {products.map(product => (
          <div key={product.id} style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* The Rounded Card Wrapper */}
            <div style={{ 
              border: '1px solid #f0f0f0', 
              borderRadius: '20px', 
              padding: '15px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)', // Soft shadow from screenshot
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              aspectRatio: '1/1'
            }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            {/* Text Styling from image_8.png */}
            <h4 style={{ textAlign: 'center', margin: '15px 0 8px', fontSize: '15px', fontWeight: '700' }}>{product.name}</h4>
            <p style={{ textAlign: 'center', margin: '0 0 15px', fontSize: '18px', fontWeight: '800' }}>R{product.price}</p>
            
            <button 
              onClick={() => addToCart(product)}
              style={{ 
                backgroundColor: '#000', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '8px', 
                padding: '14px 0', 
                width: '100%', 
                fontWeight: '800',
                fontSize: '13px'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
