// catalog.js
const STORE_CATALOG = {
  // FRAME
  'frame-full': { id: 'frame-full', sku: 'TLP-FRM-KIT', name: 'Telepath Frame — Full Kit', price: 109, isDigital: false },
  'spare-bottom-plate': { id: 'spare-bottom-plate', sku: 'TLP-FRM-BTM', name: 'Frame — Bottom Plate', price: 15, isDigital: false },
  'spare-middle-plate': { id: 'spare-middle-plate', sku: 'TLP-FRM-MID', name: 'Frame — Middle Plate', price: 12, isDigital: false },
  'spare-top-plate': { id: 'spare-top-plate', sku: 'TLP-FRM-TOP', name: 'Frame — Top Plate', price: 12, isDigital: false },
  'spare-arm': { id: 'spare-arm', sku: 'TLP-FRM-ARM', name: 'Frame — Arm', price: 8, isDigital: false },
  'spare-camera-mount': { id: 'spare-camera-mount', sku: 'TLP-FRM-CAM', name: 'Frame — Camera Mount', price: 6, isDigital: false },
  'spare-standoffs': { id: 'spare-standoffs', sku: 'TLP-FRM-STN', name: 'Frame — Standoffs', price: 5, isDigital: false },
  'spare-screws': { id: 'spare-screws', sku: 'TLP-FRM-SCR', name: 'Frame — Screws', price: 4, isDigital: false },

  // STACK
  'stack-combo': { id: 'stack-combo', sku: 'STK-CMB', name: 'Executor Stack — FC + ESC', price: 149, isDigital: false },
  'stack-fc': { id: 'stack-fc', sku: 'STK-FC', name: 'Executor Flight Controller', price: 59, isDigital: false },
  'stack-esc': { id: 'stack-esc', sku: 'STK-ESC', name: 'Executor 50A ESC', price: 99, isDigital: false },

  // MOTORS
  'motors-1960': { id: 'motors-1960', sku: 'MOT-1960', name: 'BBV4 Motors — 1960KV', price: 28, isDigital: false },
  'motors-2060': { id: 'motors-2060', sku: 'MOT-2060', name: 'BBV4 Motors — 2060KV', price: 28, isDigital: false },

  // PROPS
  'props-black': { id: 'props-black', sku: 'PRP-BLK', name: 'BB39 Props — Black', price: 3, isDigital: false },
  'props-red': { id: 'props-red', sku: 'PRP-RED', name: 'BB39 Props — Red', price: 3, isDigital: false },
  'props-blue': { id: 'props-blue', sku: 'PRP-BLU', name: 'BB39 Props — Blue', price: 3, isDigital: false },

  // LICENSE
  'license': { id: 'license', sku: 'LIC-DIGITAL', name: 'TELEPATH License', price: 15, isDigital: true }
};

// Funzione globale per leggere dal DB fittizio
function getProductById(id) {
  return STORE_CATALOG[id] || null;
}