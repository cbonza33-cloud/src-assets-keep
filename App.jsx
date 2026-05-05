import React, { useState } from 'react';

// Images mapped exactly to your folder structure
import faceCream from './face_cream2.jpg';
import faceWash from './face_wash_gel.jpg';
import sunScreen from './sun-screen.jpg';
import perfume from './pholeric_perfume.jpg';
import logo from './my_logo.png';

const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home');

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
    let message = `*NEW PHOLERIC ORDER*%0A%0A`;
    cart.forEach((item, i) => message += `${i + 1}. ${item.name} - R${item.price}%0A`);
    message += `%0A*Total: R${total}*`;
    window.open(`https://wa.me/27123456789?text=${message}`, '_blank');
  };

  return (
    <div style={styles.container}>
      {/* Fixed Black Header */}
      <header style={styles.header}>
        <img src={logo} alt="Pholeric" style={styles.logo} />
        <h1 style={styles.brandName}>PHOLERIC</h1>
        <p style={styles.tagline}>POWERED BY GOOD meddler</p>
      </header>

      {/* PAGE 1: HOME */}
      {view === 'home' && (
        <div style={styles.viewContent}>
          <h2 style={styles.heroText}>African Beauty</h2>
          <p style={styles.heroSub}>Premium skincare for the modern aesthetic.</p>
          <button onClick={() => setView('shop')} style={styles.heroButton}>Enter Shop</button>
        </div>
      )}

      {/* PAGE 2: SHOP */}
      {view === 'shop' && (
        <div style={styles.grid}>
          {products.map(product => (
            <div key={product.id} style={styles.productCard}>
              <div style={styles.imageWrapper}>
                <img src={product.img} alt={product.name} style={styles.productImg} />
              </div>
              <h4 style={styles.cardTitle}>{product.name}</h4>
              <p style={styles.cardPrice}>R{product.price}</p>
              <button onClick={() => addToCart(product)} style={styles.cardButton}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}

      {/* PAGE 3: CART */}
      {view === 'cart' && (
        <div style={styles.viewContent}>
          <h3 style={styles.cartTitle}>Your Cart ({cart.length})</h3>
          
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <span>{item.name}</span>
              <strong>R{item.price}</strong>
            </div>
          ))}
          
          {cart.length > 0 ? (
            <div style={styles.checkoutBox}>
              <h4 style={styles.totalText}>Total: R{calculateTotal()}</h4>
              <button onClick={sendWhatsAppOrder} style={styles.waButton}>Order via WhatsApp</button>
            </div>
          ) : (
            <p style={{ marginTop: '20px', color: '#666' }}>Your cart is empty.</p>
          )}
        </div>
      )}

      {/* Bottom Navigation Menu */}
      <nav style={styles.nav}>
        <button 
          onClick={() => setView('home')} 
          style={{...styles.navItem, opacity: view === 'home' ? 1 : 0.4}}>
          🏠
        </button>
        <button 
          onClick={() => setView('shop')} 
          style={{...styles.navItem, opacity: view === 'shop' ? 1 : 0.4}}>
          🛍️
        </button>
        <button 
          onClick={() => setView('cart')} 
          style={{...styles.navItem, opacity: view === 'cart' ? 1 : 0.4}}>
          🛒
        </button>
      </nav>
    </div>
  );
};

// All clean CSS styles object
const styles = {
  container: { backgroundColor: '#fff', minHeight: '100vh', fontFamily: '-apple-system, system-ui, sans-serif', maxWidth: '430px', margin: '0 auto', paddingBottom: '90px', position: 'relative' },
  header: { backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '40px 20px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  logo: { height: '40px', width: 'auto', marginBottom: '15px' },
  brandName: { margin: 0, fontSize: '26px', letterSpacing: '5px', fontWeight: '900' },
  tagline: { margin: '8px 0 0', fontSize: '11px', letterSpacing: '1px', opacity: 0.8 },
  viewContent: { padding: '40px 20px', textAlign: 'center' },
  heroText: { fontSize: '28px', fontWeight: '300', margin: '0 0 10px' },
  heroSub: { color: '#666', marginBottom: '30px', fontSize: '15px' },
  heroButton: { backgroundColor: '#000', color: '#fff', padding: '16px 40px', border: 'none', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '25px 15px' },
  productCard: { display: 'flex', flexDirection: 'column' },
  imageWrapper: { border: '1px solid #f0f0f0', borderRadius: '20px', padding: '15px', backgroundColor: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'center', alignItems: 'center', aspectRatio: '1/1', marginBottom: '15px' },
  productImg: { width: '100%', height: '100%', objectFit: 'contain' },
  cardTitle: { textAlign: 'center', margin: '0 0 8px', fontSize: '14px', fontWeight: '700' },
  cardPrice: { textAlign: 'center', margin: '0 0 15px', fontSize: '18px', fontWeight: '800' },
  cardButton: { backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px 0', width: '100%', fontWeight: '800', fontSize: '13px', cursor: 'pointer', marginTop: 'auto' },
  nav: { position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', padding: '15px 0 25px', borderTop: '1px solid #eee', zIndex: 100 },
  navItem: { background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', transition: 'all 0.2s' },
  cartTitle: { borderBottom: '2px solid #000', paddingBottom: '15px', margin: '0 0 20px' },
  cartItem: { display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #eee', fontSize: '15px' },
  checkoutBox: { marginTop: '30px', textAlign: 'center' },
  totalText: { fontSize: '22px', fontWeight: 'bold', margin: '0 0 20px' },
  waButton: { width: '100%', padding: '16px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }
};

export default App;
