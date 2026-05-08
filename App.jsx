import React, { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('shop');

  // THE FULL PRODUCT LIST - Add or edit names here to show more
  const products = [
    { id: 1, name: "Pholeric Face Cream", price: 250, img: "./face_cream2.jpg" },
    { id: 2, name: "Face Wash Gel", price: 180, img: "./face_wash_gel.jpg" },
    { id: 3, name: "Luxury Sunscreen", price: 220, img: "./sun-screen.jpg" },
    { id: 4, name: "Signature Perfume", price: 550, img: "./pholeric_perfume.jpg" },
    { id: 5, name: "Body Lotion", price: 150, img: "./body-lotion.jpg" },
    { id: 6, name: "Body Lotion 2", price: 160, img: "./body-lotion2.jpg" },
    { id: 7, name: "Face Care Treatment", price: 210, img: "./face_care.jpg" },
    { id: 8, name: "Oil Control Gel", price: 190, img: "./oil-control.jpg" },
    { id: 9, name: "Oud Wood", price: 450, img: "./oud_wood.jpg" },
    { id: 10, name: "Patchouli Classic", price: 300, img: "./patchouli.jpg" },
    { id: 11, name: "Patchouli Intense", price: 320, img: "./patchouli2.jpg" },
    { id: 12, name: "Honey Almond Body", price: 150, img: "./honey_almond_bod.jpg" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const calculateTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

  const sendWhatsAppOrder = () => {
    const total = calculateTotal();
    let message = `*NEW PHOLERIC ORDER*%0A%0A`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - R${item.price}%0A`;
    });
    message += `%0A*Total: R${total}*`;
    window.open(`https://wa.me/27123456789?text=${message}`, '_blank');
  };

  return (
    <div style={{ maxWidth: '430px', margin: '0 auto', minHeight: '100vh', backgroundColor: '#fff', position: 'relative' }}>
      
      {/* Black Header Block */}
      <header style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '50px 20px 30px' }}>
        <img src="./my_logo.png" alt="Pholeric" style={{ width: '40px', marginBottom: '15px' }} />
        <h1 style={{ margin: 0, fontSize: '26px', letterSpacing: '4px', fontWeight: 'bold' }}>PHOLERIC</h1>
        <p style={{ margin: '8px 0 0', fontSize: '11px', opacity: 0.7, letterSpacing: '1px' }}>POWERED BY GOOD meddler</p>
      </header>

      {/* Main Content Area */}
      <div style={{ padding: '20px', paddingBottom: '120px' }}>
        
        {view === 'shop' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {products.map(product => (
              <div key={product.id} style={{ textAlign: 'center' }}>
                <div style={{ 
                  border: '1px solid #f2f2f2', 
                  borderRadius: '20px', 
                  padding: '10px', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  backgroundColor: '#fff',
                  aspectRatio: '1/1',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <img src={product.img} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
                </div>
                <h4 style={{ margin: '5px 0', fontSize: '14px', fontWeight: '700' }}>{product.name}</h4>
                <p style={{ margin: '0 0 10px', fontSize: '18px', fontWeight: '800' }}>R{product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  style={{ width: '100%', backgroundColor: '#000', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', fontSize: '12px' }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

        {view === 'cart' && (
          <div>
            <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '10px' }}>Your Cart ({cart.length})</h3>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #eee' }}>
                <span>{item.name}</span>
                <strong>R{item.price}</strong>
              </div>
            ))}
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '24px' }}>Total: R{calculateTotal()}</h2>
              <button 
                onClick={sendWhatsAppOrder}
                style={{ width: '100%', padding: '15px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', marginTop: '20px' }}
              >
                Checkout via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', padding: '20px 0 35px', borderTop: '1px solid #eee', zIndex: 100 }}>
        <button onClick={() => setView('shop')} style={{ background: 'none', border: 'none', fontSize: '24px', opacity: view === 'shop' ? 1 : 0.3 }}>🛍️</button>
        <button onClick={() => setView('cart')} style={{ background: 'none', border: 'none', fontSize: '24px', opacity: view === 'cart' ? 1 : 0.3 }}>🛒 ({cart.length})</button>
      </nav>
    </div>
  );
};

export default App;
