import React, { useState } from 'react';

// Verified imports matching your root directory
import faceCream from './face_cream2.jpg';
import faceWash from './face_wash_gel.jpg';
import sunScreen from './sun-screen.jpg';
import perfume from './pholeric_perfume.jpg';
import logo from './my_logo.png';

const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home'); // views: home, shop, cart

  const products = [
    { id: 1, name: "Luxury Face Cream", price: 250, img: faceCream, tag: "REJUVENATE" },
    { id: 2, name: "Gentle Face Wash", price: 180, img: faceWash, tag: "CLEANSE" },
    { id: 3, name: "Daily Sunscreen", price: 220, img: sunScreen, tag: "PROTECT" },
    { id: 4, name: "Signature Perfume", price: 550, img: perfume, tag: "ESSENCE" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

  const sendWhatsAppOrder = () => {
    const total = calculateTotal();
    let message = `*PHOLERIC LUXURY ORDER*%0A%0A`;
    cart.forEach((item, index) => {
      message += `• ${item.name} (R${item.price})%0A`;
    });
    message += `%0A*Total Amount: R${total}*`;
    window.open(`https://wa.me/27123456789?text=${message}`, '_blank');
  };

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", serif', 
      maxWidth: '430px', 
      margin: '0 auto', 
      backgroundColor: '#fff', 
      minHeight: '100vh',
      color: '#1a1a1a'
    }}>
      
      {/* Premium Header */}
      <header style={{ 
        padding: '30px 20px', 
        textAlign: 'center', 
        borderBottom: '1px solid #f2f2f2',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255,255,255,0.95)',
        zIndex: 10
      }}>
        <img src={logo} alt="GOOD meddler" style={{ height: '24px', opacity: 0.8 }} />
        <h1 style={{ margin: '10px 0 0', fontSize: '24px', letterSpacing: '4px', fontWeight: '300' }}>PHOLERIC</h1>
      </header>

      {/* Hero Section (Only on Home) */}
      {view === 'home' && (
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <div style={{ 
            height: '300px', 
            backgroundImage: `url(${perfume})`, 
            backgroundSize: 'cover', 
            borderRadius: '20px',
            marginBottom: '30px'
          }}></div>
          <h2 style={{ fontWeight: '300', fontSize: '28px' }}>African Beauty, Defined.</h2>
          <p style={{ color: '#666', lineHeight: '1.6' }}>Experience luxury skincare crafted for the modern aesthetic.</p>
          <button 
            onClick={() => setView('shop')}
            style={{ 
              marginTop: '20px', 
              padding: '15px 40px', 
              backgroundColor: '#000', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '50px',
              fontSize: '16px'
            }}
          >
            Enter Boutique
          </button>
        </div>
      )}

      {/* Shop View */}
      {view === 'shop' && (
        <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', paddingBottom: '120px' }}>
          {products.map(product => (
            <div key={product.id} style={{ textAlign: 'left' }}>
              <div style={{ position: 'relative' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px' }} />
                <span style={{ 
                  position: 'absolute', top: '10px', left: '10px', 
                  backgroundColor: '#fff', fontSize: '10px', padding: '4px 8px', 
                  borderRadius: '4px', fontWeight: 'bold', letterSpacing: '1px' 
                }}>{product.tag}</span>
              </div>
              <h4 style={{ margin: '12px 0 4px', fontWeight: '500', fontSize: '14px' }}>{product.name}</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#888' }}>R{product.price}</p>
              <button 
                onClick={() => addToCart(product)}
                style={{ 
                  marginTop: '10px', width: '100%', padding: '10px', 
                  backgroundColor: '#000', color: '#fff', border: 'none', 
                  borderRadius: '8px', fontSize: '12px' 
                }}
              >
                Add to Collection
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Floating Cart/Checkout Button */}
      {cart.length > 0 && (
        <div style={{ 
          position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
          width: '90%', maxWidth: '390px', zIndex: 100
        }}>
          <button 
            onClick={sendWhatsAppOrder}
            style={{ 
              width: '100%', padding: '18px', backgroundColor: '#000', color: '#fff', 
              border: 'none', borderRadius: '15px', fontWeight: '600', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)', display: 'flex', justifyContent: 'space-between'
            }}
          >
            <span>Complete Order ({cart.length})</span>
            <span>R{calculateTotal()}</span>
          </button>
        </div>
      )}

      {/* Bottom Nav */}
      <nav style={{ 
        position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', 
        backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', 
        padding: '15px 0', borderTop: '1px solid #f2f2f2'
      }}>
        <button onClick={() => setView('home')} style={{ background: 'none', border: 'none', fontSize: '20px' }}>🏠</button>
        <button onClick={() => setView('shop')} style={{ background: 'none', border: 'none', fontSize: '20px' }}>✨</button>
      </nav>
    </div>
  );
};

export default App;
