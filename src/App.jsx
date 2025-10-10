import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes, FaHeart, FaHands, FaLeaf } from "react-icons/fa"; // Adicionado mais ícones
import Logo from './assets/Logo.jpg';
import img1 from './assets/Foto1.jpg';
import img3 from './assets/Foto3.jpg';
import img2 from './assets/Foto2.jpg'; // Importe o logo
// Paleta de Cores (Definidas em Hex para uso direto no Tailwind):
// - #264E1D: Verde Escuro (Primário, Títulos)
// - #4B7B39: Verde Médio (Secundário, Detalhes)
// - #A15E26: Marrom/Cobre (Destaque, CTA)
// - #F5E4B8: Bege Claro (Fundo Principal)

const sampleProducts = [
  { id: 1, category: "Ervas", name: "Erva Matuta - Menta extreme", desc: "Cuia esculpida à mão. Acabamento premium.", price: "24,90", img: img1 },
  { id: 2, category: "Ervas", name: "Erva Matuta - Menta Monster", desc: "Bomba profissional para uso diário.", price: "R$ 29,90",img: img2  },
  { id: 3, category: "Ervas", name: "Erva Matuta - Cereja", desc: "Blend aromático para um tererê refrescante.", price: "22,99", img: img3  },
  { id: 4, category: "Cuias", name: "Cuia de Couro", desc: "Clássica e durável, feita em couro legítimo.", price: "R$ 29,90", img: "https://images.unsplash.com/photo-1517486801-f2f6a6c4b2b6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" },
];

// Variantes de Animação
const slideIn = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

// --- COMPONENTES AUXILIARES ---

function Navbar({ onToggleMobile }) {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-40 bg-[#F5E4B8]/90 backdrop-blur-sm shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-[#A15E26] flex items-center justify-center">
                  <img 
                    src={Logo}  
                    alt="Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>

          <div className="hidden sm:block">
            <h1 className="font-semibold text-lg text-[#264E1D]">Tropical Mate</h1>
            <p className="text-xs text-[#4B7B39]">Cuias • Bombas • Ervas</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-[#264E1D] hover:text-[#A15E26] transition">Início</a>
          <a href="#about" className="text-[#264E1D] hover:text-[#A15E26] transition">Por que Tererê?</a>
          <a href="#catalog" className="text-[#264E1D] hover:text-[#A15E26] transition">Catálogo</a>
          <a href="#contact" className="text-[#264E1D] hover:text-[#A15E26] transition">Contato</a>
        </nav>

        <div className="md:hidden">
          <button onClick={onToggleMobile} aria-label="Abrir menu" className="text-[#264E1D] text-xl">
            <FaBars />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

function MobileMenu({ visible, onClose }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed right-0 top-0 w-full max-w-xs h-full bg-[#F5E4B8] z-50 shadow-xl"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-xl text-[#264E1D]">Menu</h3>
              <button onClick={onClose} className="text-[#264E1D] text-xl"><FaTimes /></button>
            </div>
            <ul className="flex flex-col gap-6 text-[#264E1D] font-medium text-lg">
              <li><a href="#home" onClick={onClose} className="hover:text-[#A15E26] transition">Início</a></li>
              <li><a href="#about" onClick={onClose} className="hover:text-[#A15E26] transition">Por que Tererê?</a></li>
              <li><a href="#catalog" onClick={onClose} className="hover:text-[#A15E26] transition">Catálogo</a></li>
              <li><a href="#contact" onClick={onClose} className="hover:text-[#A15E26] transition">Contato</a></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[60vh] md:h-[70vh] flex items-center">
        {/* Imagem de Fundo com filtro escurecido para contraste */}
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/fotos-gratis/deliciosa-bebida-terere-natureza-morta_23-2150219501.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center filter brightness-50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            {/* Texto em branco para melhor contraste */}
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">Sinta o Frescor do Tererê</h2>
            <p className="mt-3 text-lg md:text-xl max-w-2xl text-gray-200">Cuias artesanais, bombas profissionais e blends selecionados para um tererê perfeito.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <motion.a 
                whileHover={{ scale: 1.05 }} 
                href="#catalog" 
                className="inline-flex items-center justify-center gap-3 bg-[#A15E26] hover:bg-[#A15E26]/80 transition-shadow shadow-xl px-6 py-3 rounded-lg font-medium text-white w-full sm:w-auto"
              >
                Ver Catálogo
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="https://wa.me/5591999999999?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20seus%20produtos" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#4B7B39] hover:bg-[#264E1D] transition-colors text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto"
              >
                <FaWhatsapp /> Comprar via WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// NOVO COMPONENTE
function AboutSection() {
  const benefits = [
    { icon: FaHeart, title: "Bem-Estar", description: "Hidratação profunda e rica em vitaminas e antioxidantes.", delay: 0.1 },
    { icon: FaHands, title: "Tradição e Cultura", description: "Um ritual que une amigos, família e o melhor da cultura brasileira.", delay: 0.2 },
    { icon: FaLeaf, title: "Pura Energia", description: "Energia natural e sustentável, ideal para o dia a dia e atividades físicas.", delay: 0.3 },
  ];

  return (
    <section id="about" className="py-20 bg-[#F5E4B8]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideIn}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#264E1D] text-center mb-12"
        >
          Por Que o Tererê Faz Bem?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideIn}
              transition={{ duration: 0.6, delay: benefit.delay }}
              className="p-6 bg-white rounded-xl shadow-lg text-center"
            >
              <benefit.icon className="text-5xl text-[#4B7B39] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#264E1D] mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// NOVO COMPONENTE
// NOVO COMPONENTE (APENAS O PRODUCTCARD FOI ALTERADO)
function ProductCard({ product, index }) {
  const waLink = `https://wa.me/5581999928655`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideIn}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow"
    >
      {/* Ajuste feito aqui:
        1. Mantido 'h-48' para altura do container.
        2. Alterado 'object-cover' para 'object-contain' para mostrar a imagem completa.
        3. Adicionado 'p-2' no contêiner para um pequeno padding visual.
      */}
      <div className="h-48 bg-white-200 overflow-hidden flex items-center justify-center p-2">
        <img 
          // O replace não é mais necessário, pois você importou as imagens
          src={product.img} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#264E1D]">{product.name}</h3>
        <p className="text-sm text-[#A15E26] font-medium mt-1 mb-3">{product.category}</p>
        <p className="text-gray-600 text-sm flex-grow">{product.desc}</p>
        <p className="text-2xl font-extrabold text-[#4B7B39] mt-3 mb-4">{product.price}</p>
        
        <motion.a
          whileHover={{ scale: 1.02 }}
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 bg-[#264E1D] hover:bg-[#4B7B39] transition-colors text-white px-4 py-3 rounded-lg font-semibold w-full"
        >
          <FaWhatsapp /> Quero Este
        </motion.a>
      </div>
    </motion.div>
  );
}
// ...

// NOVO COMPONENTE
function CatalogSection({ products }) {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const categories = ['Todos', 'Cuias', 'Bombas', 'Ervas'];

  const filteredProducts = activeFilter === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideIn}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#264E1D] text-center mb-10"
        >
          Nosso Catálogo
        </motion.h2>

        {/* Filtros */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeFilter === cat 
                  ? 'bg-[#A15E26] text-white shadow-md' 
                  : 'bg-gray-100 text-[#264E1D] hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid de Produtos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">Nenhum produto encontrado nesta categoria.</p>
        )}
      </div>
    </section>
  );
}

// NOVO COMPONENTE
function Footer() {
    const waLink = "https://wa.me/5581999928655";
    return (
        <footer id="contact" className="bg-[#264E1D] text-white py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h3 className="text-3xl font-extrabold mb-4">Tropical Mate</h3>
                <p className="text-[#F5E4B8] mb-6">Sua loja premium de Tererê. Qualidade e Tradição.</p>
                
                <a 
                    href={waLink} 
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-[#A15E26] hover:bg-[#A15E26]/80 transition-colors px-6 py-3 rounded-lg font-semibold text-lg shadow-md"
                >
                    <FaWhatsapp /> Contate-nos
                </a>

                <div className="mt-8 pt-6 border-t border-[#4B7B39] text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Tropical Mate. Todos os direitos reservados.</p>
                     <p>&copy;  Developed By FIGU3IR4.</p>
                </div>
            </div>
        </footer>
    );
}

function FloatingWhatsApp() {
  const phone = "5581999928655";
  const waLink = `https://wa.me/${phone}?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20seus%20produtos`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0.9 }}
      // Animação de pulsar
      animate={{ scale: [1, 1.06, 1], boxShadow: ["0 0 0 0 rgba(161,94,38,0.16)", "0 0 0 8px rgba(161,94,38,0.08)", "0 0 0 0 rgba(161,94,38,0.0)"] }}
      transition={{ repeat: Infinity, duration: 2.8 }}
      className="fixed right-5 bottom-5 z-50 flex items-center gap-3 bg-[#A15E26] text-white px-4 py-3 rounded-full shadow-lg"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden sm:inline">Comprar via WhatsApp</span>
    </motion.a>
  );
}

// --- COMPONENTE PRINCIPAL (Onde tudo se junta) ---

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Adiciona o background de todo o site
    <div className="bg-gray-50 min-h-screen font-sans">
      
      <Navbar onToggleMobile={() => setIsMenuOpen(true)} />
      
      <MobileMenu visible={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="overflow-x-hidden">
        <Hero />
        <AboutSection />
        <CatalogSection products={sampleProducts} />
      </main>
      
      <Footer />
      
      <FloatingWhatsApp />
    </div>
  );
}

export default App;