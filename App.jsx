import React, { useState } from 'react';

// Product images
import faceCream from './face_cream2.jpg';
import faceWash from './face_wash_gel.jpg';
import sunScreen from './sun-screen.jpg';
import perfume from './pholeric_perfume.jpg';
import logo from './my_logo.png';

const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('shop'); // Defaulting to shop to match your screenshot

  const products = [
    { id: 1, name: "Pholeric Face Cream", price: 250, img: faceCream },
    { id: 2, name: "Face Wash Gel", price: 180, img: faceWash },
    { id: 3, name: "Luxury Sunscreen", price: 220, img: sunScreen },
    { id: 4, name: "Signature Perfume", price: 550, img: perfume }
  ];

  const addToCart = (p) => setCart([...cart, p]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const sendOrder = () => {
    let msg = `*PHOLERIC ORDER*%0A%0A`;
    cart.forEach((item, i) => msg += `${i + 1}. ${item.name} - R${item.price}%0A`);
    msg += `%0A*Total: R${total}*`;
    window.open(`https://wa.me/27123456789?text=${msg}`, '_blank');
  };

  return (
    <div style={styles.appWrapper}>
      {/* Black Header Block */}
      <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.brandName}>PHOLERIC</h1>
        <p style={styles.tagline}>POWERED BY GOOD meddler</p>
      </header>

      <main style={styles.main}>
        {view === 'shop' && (
          <div style={styles.grid}>
            {products.map(product => (
              <div key={product.id} style={styles.card}>
                <div style={styles.imageContainer}>
                  <img src={product.img} alt={product.name} style={styles.productImg} />
                </div>
                <h4 style={styles.productName}>{product.name}</h4>
                <p style={styles.price}>R{product.price}</p>
                <button onClick={() => addToCart(product)} style={styles.addBtn}>Add to Cart</button>
              </div>
            ))}
          </div>
        )}

        {view === 'cart' && (
          <div style={styles.cartView}>
            <h3>Your Selection ({cart.length})</h3>
            {cart.map((item, i) => (
              <div key={i} style={styles.cartRow}>
                <span>{item.name}</span>
                <strong>R{item.price}</strong>
              </div>
            ))}
            {cart.length > 0 && (
              <div style={styles.checkout}>
                <h4>Total: R{total}</h4>
                <button onClick={sendOrder} style={styles.waBtn}>Checkout via WhatsApp</button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Persistent Nav */}
      <nav style={styles.nav}>
        <button onClick={() => setView('shop')} style={{...styles.navBtn, opacity: view === 'shop' ? 1 : 0.4}}>🛍️</button>
        <button onClick={() => setView('cart')} style={{...styles.navBtn, opacity: view === 'cart' ? 1 : 0.4}}>🛒 ({cart.length})</button>
      </nav>
    </div>
  );
};

const styles = {
  appWrapper: { maxWidth: '430px', margin: '0 auto', minHeight: '100vh', backgroundColor: '#fff' },
  header: { backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '50px 20px 30px' },
  logo: { width: '40px', marginBottom: '15px' },
  brandName: { margin: 0, fontSize: '24px', letterSpacing: '4px', fontWeight: 'bold' },
  tagline: { margin: '5px 0 0', fontSize: '10px', opacity: 0.6, letterSpacing: '1px' },
  main: { paddingBottom: '100px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '20px' },
  card: { textAlign: 'center' },
  imageContainer: { 
    border: '1px solid #f2f2f2', 
    borderRadius: '20px', 
    padding: '10px', 
    aspectRatio: '1/1', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    marginBottom: '12px'
  },
  productImg: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' },
  productName: { fontSize: '14px', margin: '5px 0', fontWeight: '600' },
  price: { fontSize: '18px', fontWeight: 'bold', margin: '5px 0 10px' },
  addBtn: { width: '100%', backgroundColor: '#000', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', fontSize: '12px' },
  nav: { position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', padding: '15px 0 30px', borderTop: '1px solid #eee' },
  navBtn: { background: 'none', border: 'none', fontSize: '22px' },
  cartView: { padding: '20px' },
  cartRow: { display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' },
  checkout: { marginTop: '30px', textAlign: 'center' },
  waBtn: { width: '100%', padding: '15px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px' }
};

export default App;
