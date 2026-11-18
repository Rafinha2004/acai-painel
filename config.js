// Configuração do app Web do Firebase (projeto acai-logistica).
// Estes dados não são segredo: quem protege o banco são as regras de segurança do Firestore.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCmn9Cn1BMaqn2w7_uHSO2-UJ8gfG7yIC8",
  authDomain: "acai-logistica.firebaseapp.com",
  projectId: "acai-logistica",
  storageBucket: "acai-logistica.firebasestorage.app",
  messagingSenderId: "13123925880",
  appId: "1:13123925880:web:9f78d7d5693fbaa49d7a8d"
};

// Regiões da operação. A chave (à esquerda) é o valor gravado em "regionId" de cada entregador.
window.REGIONS = {
  praia: "Praia Grande",
  guaruja: "Guarujá",
  mongagua: "Mongaguá"
};
