import React, { useState } from 'react';

// Using a list for all your images based on your GitHub files
const productData = [
  { id: 1, name: "Pholeric Face Cream", price: 250, img: "./face_cream2.jpg" },
  { id: 2, name: "Face Wash Gel", price: 180, img: "./face_wash_gel.jpg" },
  { id: 3, name: "Luxury Sunscreen", price: 220, img: "./sun-screen.jpg" },
  { id: 4, name: "Signature Perfume", price: 550, img: "./pholeric_perfume.jpg" },
  { id: 5, name: "Body Lotion", price: 150, img: "./body-lotion.jpg" },
  { id: 6, name: "Body Lotion 2", price: 160, img: "./body-lotion2.jpg" },
  { id: 7, name: "Face Care", price: 210, img: "./face_care.jpg" },
  { id: 8, name: "Oil Control", price: 190, img: "./oil-control.jpg" },
  { id: 9, name: "Oud Wood", price: 450, img: "./oud_wood.jpg" },
  { id: 10, name: "Patchouli", price: 300, img: "./patchouli.jpg" }
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    setCart([...cart, p]);
    alert(p.name + " added!");
  };

  const sendOrder = () => {
    const total = cart.reduce((s, i) => s + i.price, 0);
    let msg = `*NEW PHOLERIC ORDER*%0A%0A`;
    cart.forEach((item, i) => msg += `${i + 1}. ${item.name} - R${item.price}%0A`);
    msg += `%0A*Total: R${total}*`;
    window.open(`https://wa.me/27123456789?text=${msg}`, '_blank');
  };

  return (
    <div style={{ maxWidth: '430px', margin: '0 auto', backgroundColor: '#fff', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '40px 20px' }}>
        <img src="./my_logo.png" alt="Logo" style={{ width: '40px' }} />
        <h1 style={{ margin: '10px 0 0', fontSize: '24px', letterSpacing: '4px' }}>PHOLERIC</h1>
        <p style={{ margin: '5px 0 0', fontSize: '10px', opacity: 0.6 }}>POWERED BY GOOD meddler</p>
      </header>

      <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', paddingBottom: '100px' }}>
        {productData.map(p => (
          <div key={p.id} style={{ textAlign: 'center' }}>
            <div style={{ border: '1px solid #f2f2f2', borderRadius: '20px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '10px' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', borderRadius: '12px' }} />
            </div>
            <h4 style={{ fontSize: '13px', margin: '5px 0' }}>{p.name}</h4>
            <p style={{ fontWeight: 'bold', margin: '5px 0' }}>R{p.price}</p>
            <button onClick={() => addToCart(p)} style={{ width: '100%', backgroundColor: '#000', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold' }}>Add to Cart</button>
          </div>
        ))}
      </div>

      <nav style={{ position: 'fixed', bottom: 0, width: '100%', maxWidth: '430px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', padding: '20px 0', borderTop: '1px solid #eee' }}>
        <button onClick={sendOrder} style={{ background: '#25D366', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold' }}>
          🛒 Cart ({cart.length}) - Checkout
        </button>
      </nav>
    </div>
  );
};

export default App;
