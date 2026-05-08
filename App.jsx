import React, { useState, useEffect } from 'react'

// ============================================
// PHOLERIC - Premium Skincare App
// ============================================

const products = [
  { id: 1, name: 'Pholeric Face Cream', price: 250, img: 'face_cream2.jpg' },
  { id: 2, name: 'Face Wash Gel', price: 180, img: 'face_wash_gel.jpg' },
  { id: 3, name: 'Luxury Sunscreen', price: 220, img: 'sun-screen.jpg' },
  { id: 4, name: 'Signature Perfume', price: 550, img: 'pholeric_perfume.jpg' },
  { id: 5, name: 'Body Lotion', price: 150, img: 'body-lotion.jpg' },
  { id: 6, name: 'Oud Wood', price: 450, img: 'oud_wood.jpg' },
]

const styles = {
  app: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#f8f8f8',
    minHeight: '100vh',
    paddingBottom: '80px',
    maxWidth: '480px',
    margin: '0 auto',
    position: 'relative',
    overflowX: 'hidden',
  },
  header: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '20px 16px',
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  brandName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '5px',
    margin: 0,
    textTransform: 'uppercase',
  },
  subtext: {
    fontSize: '10px',
    fontWeight: 400,
    letterSpacing: '3px',
    marginTop: '4px',
    opacity: 0.8,
    textTransform: 'uppercase',
  },
  hero: {
    background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
    color: '#ffffff',
    padding: '60px 24px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '36px',
    fontWeight: 700,
    marginBottom: '12px',
    lineHeight: 1.2,
  },
  heroSubtitle: {
    fontSize: '14px',
    fontWeight: 300,
    opacity: 0.9,
    marginBottom: '32px',
    letterSpacing: '1px',
  },
  shopButton: {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    padding: '16px 48px',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255,255,255,0.2)',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '22px',
    fontWeight: 600,
    textAlign: 'center',
    margin: '32px 16px 20px',
    color: '#1a1a1a',
    letterSpacing: '1px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    padding: '0 16px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    border: '1px solid #e8e8e8',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardImageContainer: {
    width: '100%',
    height: '180px',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    color: '#999',
    fontSize: '12px',
    textAlign: 'center',
    padding: '20px',
  },
  cardContent: {
    padding: '16px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  productName: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1a1a1a',
    marginBottom: '4px',
    lineHeight: 1.3,
  },
  productPrice: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#000000',
    marginBottom: '12px',
  },
  addButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    padding: '12px',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    borderRadius: '12px',
    width: '100%',
    marginTop: 'auto',
    transition: 'background-color 0.3s ease',
  },
  addButtonAdded: {
    backgroundColor: '#2d5a27',
  },
  cartContainer: {
    padding: '16px',
  },
  cartItem: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e8e8e8',
    padding: '16px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
  },
  cartItemImage: {
    width: '70px',
    height: '70px',
    borderRadius: '12px',
    objectFit: 'cover',
    backgroundColor: '#f5f5f5',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1a1a1a',
    marginBottom: '4px',
  },
  cartItemPrice: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#000000',
  },
  removeButton: {
    backgroundColor: 'transparent',
    border: '1px solid #ddd',
    color: '#666',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    cursor: 'pointer',
    fontWeight: 500,
  },
  cartTotal: {
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    marginTop: '20px',
    textAlign: 'center',
  },
  totalLabel: {
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    opacity: 0.8,
    marginBottom: '8px',
  },
  totalAmount: {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '20px',
  },
  checkoutButton: {
    backgroundColor: '#25d366',
    color: '#ffffff',
    border: 'none',
    padding: '16px 32px',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    borderRadius: '12px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 4px 15px rgba(37,211,102,0.3)',
  },
  emptyCart: {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#999',
  },
  emptyCartIcon: {
    fontSize: '48px',
    marginBottom: '16px',
    opacity: 0.5,
  },
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '480px',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e8e8e8',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '12px 0',
    zIndex: 1000,
    boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
    paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    padding: '4px 16px',
    borderRadius: '12px',
    transition: 'all 0.2s ease',
    backgroundColor: 'transparent',
    border: 'none',
    fontFamily: 'inherit',
  },
  navItemActive: {
    color: '#000000',
  },
  navItemInactive: {
    color: '#999999',
  },
  navIcon: {
    fontSize: '24px',
  },
  navLabel: {
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  badge: {
    position: 'absolute',
    top: '-4px',
    right: '8px',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: 700,
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeContainer: {
    position: 'relative',
  },
}

// SVG Icons as components
const HomeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#000' : '#999'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const ShopIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#000' : '#999'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const CartIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#000' : '#999'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function App() {
  const [view, setView] = useState('home')
  const [cart, setCart] = useState([])
  const [addedIds, setAddedIds] = useState(new Set())

  const addToCart = (product) => {
    setCart([...cart, product])
    setAddedIds(new Set([...addedIds, product.id]))
    
    // Reset the "added" state after 2 seconds
    setTimeout(() => {
      setAddedIds(prev => {
        const next = new Set(prev)
        next.delete(product.id)
        return next
      })
    }, 2000)
  }

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    const message = `Hello PHOLERIC! I'd like to order:\n\n${cart.map(item => `- ${item.name}: R${item.price}`).join('\n')}\n\nTotal: R${cartTotal}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/27695871955?text=${encodedMessage}`, '_blank')
  }

  const renderHome = () => (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>African Beauty</h1>
        <p style={styles.heroSubtitle}>Powered by Good Meddler</p>
        <button 
          style={styles.shopButton} 
          onClick={() => setView('shop')}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f0f0f0'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#ffffff'
            e.target.style.transform = 'translateY(0)'
          }}
        >
          Shop Now
        </button>
      </div>
      <h2 style={styles.sectionTitle}>Our Collection</h2>
      <div style={styles.grid}>
        {products.slice(0, 4).map(product => (
          <div key={product.id} style={styles.card}>
            <div style={styles.cardImageContainer}>
              <img 
                src={product.img} 
                alt={product.name}
                style={styles.cardImage}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div style={{...styles.placeholderImage, display: 'none'}}>
                {product.name}
              </div>
            </div>
            <div style={styles.cardContent}>
              <div style={styles.productName}>{product.name}</div>
              <div style={styles.productPrice}>R{product.price}</div>
              <button 
                style={{
                  ...styles.addButton,
                  ...(addedIds.has(product.id) ? styles.addButtonAdded : {})
                }}
                onClick={() => addToCart(product)}
              >
                {addedIds.has(product.id) ? 'Added ✓' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderShop = () => (
    <div>
      <h2 style={styles.sectionTitle}>All Products</h2>
      <div style={styles.grid}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <div style={styles.cardImageContainer}>
              <img 
                src={product.img} 
                alt={product.name}
                style={styles.cardImage}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div style={{...styles.placeholderImage, display: 'none'}}>
                {product.name}
              </div>
            </div>
            <div style={styles.cardContent}>
              <div style={styles.productName}>{product.name}</div>
              <div style={styles.productPrice}>R{product.price}</div>
              <button 
                style={{
                  ...styles.addButton,
                  ...(addedIds.has(product.id) ? styles.addButtonAdded : {})
                }}
                onClick={() => addToCart(product)}
              >
                {addedIds.has(product.id) ? 'Added ✓' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderCart = () => (
    <div style={styles.cartContainer}>
      <h2 style={styles.sectionTitle}>Your Cart</h2>
      {cart.length === 0 ? (
        <div style={styles.emptyCart}>
          <div style={styles.emptyCartIcon}>🛒</div>
          <p>Your cart is empty</p>
          <button 
            style={{...styles.shopButton, marginTop: '20px'}}
            onClick={() => setView('shop')}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} style={styles.cartItem}>
              <img 
                src={item.img} 
                alt={item.name}
                style={styles.cartItemImage}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <div style={styles.cartItemDetails}>
                <div style={styles.cartItemName}>{item.name}</div>
                <div style={styles.cartItemPrice}>R{item.price}</div>
              </div>
              <button 
                style={styles.removeButton}
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div style={styles.cartTotal}>
            <div style={styles.totalLabel}>Total Amount</div>
            <div style={styles.totalAmount}>R{cartTotal}</div>
            <button style={styles.checkoutButton} onClick={handleCheckout}>
              <WhatsAppIcon />
              Checkout via WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  )

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.brandName}>PHOLERIC</h1>
        <div style={styles.subtext}>Powered by Good Meddler</div>
      </header>

      <main>
        {view === 'home' && renderHome()}
        {view === 'shop' && renderShop()}
        {view === 'cart' && renderCart()}
      </main>

      <nav style={styles.bottomNav}>
        <button 
          style={{
            ...styles.navItem,
            ...(view === 'home' ? styles.navItemActive : styles.navItemInactive)
          }}
          onClick={() => setView('home')}
        >
          <HomeIcon active={view === 'home'} />
          <span style={styles.navLabel}>Home</span>
        </button>
        
        <button 
          style={{
            ...styles.navItem,
            ...(view === 'shop' ? styles.navItemActive : styles.navItemInactive)
          }}
          onClick={() => setView('shop')}
        >
          <ShopIcon active={view === 'shop'} />
          <span style={styles.navLabel}>Shop</span>
        </button>
        
        <button 
          style={{
            ...styles.navItem,
            ...(view === 'cart' ? styles.navItemActive : styles.navItemInactive)
          }}
          onClick={() => setView('cart')}
        >
          <div style={styles.badgeContainer}>
            <CartIcon active={view === 'cart'} />
            {cart.length > 0 && (
              <span style={styles.badge}>{cart.length}</span>
            )}
          </div>
          <span style={styles.navLabel}>Cart</span>
        </button>
      </nav>
    </div>
  )
}

export default App
