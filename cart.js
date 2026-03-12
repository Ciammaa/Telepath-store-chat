// cart.js
const CART_KEY = 'telepath_cart_storage';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  if (typeof syncCartFloat === 'function') syncCartFloat();
}

// Aggiunge al carrello passando SOLO l'ID
function cartAdd(id, qty = 1) {
  let cart = getCart();
  let idx = cart.findIndex(item => item.id === id);
  
  if (idx >= 0) {
    cart[idx].qty += qty;
  } else {
    // Salviamo SOLO l'ID e la quantità. Il resto verrà preso dal DB all'occorrenza.
    cart.push({ id: id, qty: qty });
  }
  
  saveCart(cart);
}

function cartUpdateQty(id, delta) {
  let cart = getCart();
  let idx = cart.findIndex(item => item.id === id);
  if (idx < 0) return;
  
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  saveCart(cart);
}

// Aggiorna il pallino in basso a destra su tutte le pagine
function syncCartFloat() {
  let cart = getCart();
  let count = 0;
  let total = 0;

  cart.forEach(item => {
    let product = getProductById(item.id);
    if (product) {
      count += item.qty;
      total += product.price * item.qty;
    }
  });

  let countEl = document.getElementById('cartCount');
  let totalEl = document.getElementById('cartTotal');
  let floatEl = document.getElementById('cartFloat');

  if (countEl) countEl.textContent = count;
  if (totalEl) totalEl.textContent = '€ ' + Math.round(total);
  if (floatEl) {
    if (count > 0) floatEl.classList.add('visible');
    else floatEl.classList.remove('visible');
  }
}

// Inizializza il float all'avvio della pagina
document.addEventListener('DOMContentLoaded', function() {
  if (typeof syncCartFloat === 'function') syncCartFloat();
});