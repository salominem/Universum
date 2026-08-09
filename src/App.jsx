import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState('');

  const servicios = [
    {
      titulo: 'Landing Page (Página Única)',
      descripcion: 'Diseño enfocado en una oferta o producto específico para convertir visitantes en clientes rápidamente. Ideal para promociones y anuncios.',
      icono: '🚀',
      badge: 'Alta Conversión'
    },
    {
      titulo: 'Web Corporativa / Institucional',
      descripcion: 'Múltiples secciones (Inicio, Nosotros, Servicios, Galería) para proyectar confianza, profesionalismo y mostrar todo tu catálogo.',
      icono: '🏢',
      badge: 'Presencia de Marca'
    },
    {
      titulo: 'Tienda Online (E-Commerce)',
      descripcion: 'Catálogo de productos interactivo con carrito de compras y pasarela de pagos para vender de forma automatizada las 24 horas.',
      icono: '🛒',
      badge: 'Ventas Automatizadas'
    }
  ];

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrpzegdo';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('exito');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const telefonoWhatsapp = '5493815649551';
  const mensajePredeterminado = encodeURIComponent('Hola Universum, me interesa una página web quiero mas información!');
  const urlWhatsapp = `https://wa.me/${telefonoWhatsapp}?text=${mensajePredeterminado}`;

  // Variantes de animación reutilizables
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-[#E2E8F0] font-sans antialiased selection:bg-[#0066FF] selection:text-white relative overflow-x-hidden">

      {/* 1. HEADER / NAVBAR */}
      <header className="header-main sticky top-0 z-50 bg-[#050811]/80 backdrop-blur-md border-b border-[#1E293B]">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-widest text-white">
            <span className="text-[#0066FF] drop-shadow-[0_0_10px_rgba(0,102,255,0.8)]">UNI</span>VERSUM
          </a>
          <ul className="hidden md:flex space-x-8 font-medium text-slate-400">
            <li><a href="#inicio" className="hover:text-[#00D2FF] transition-colors">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-[#00D2FF] transition-colors">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-[#00D2FF] transition-colors">Quiénes Somos</a></li>
            <li><a href="#contacto" className="hover:text-[#00D2FF] transition-colors">Contacto</a></li>
          </ul>
          <a 
            href={urlWhatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(0,102,255,0.5)] hover:shadow-[0_0_25px_rgba(0,102,255,0.8)] transition-all"
          >
            Consultar
          </a>
        </nav>
      </header>

      {/* 2. BANNER PRINCIPAL (HERO SECTION CON ANIMACIÓN DE ENTRADA) */}
      <section id="inicio" className="section-hero relative min-h-[85vh] flex items-center bg-[#050811] text-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#00D2FF]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
            alt="Banner Negocio" 
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-transparent to-[#050811]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 py-20">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 border border-[#0066FF]/50 bg-[#0066FF]/10 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse"></span>
              <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest">Your Digital Universe.</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Construímos el futuro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D2FF] drop-shadow-[0_0_20px_rgba(0,102,255,0.4)]">DIGITAL.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl font-light">
              Ofrecemos soluciones avanzadas y escalables adaptadas a tu negocio para maximizar conversiones y acelerar tu crecimiento.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold px-8 py-4 rounded-xl text-center shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.7)] transition-all">
                Empezar Ahora
              </a>
              <a href="#nosotros" className="bg-[#0B132B] hover:bg-[#1C2541] text-slate-200 border border-[#1E293B] hover:border-[#0066FF]/50 font-semibold px-8 py-4 rounded-xl text-center transition-all">
                Conocer Más
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. SECCIÓN TARJETAS DE SERVICIOS (SCROLL REVEAL EN ENTRADA) */}
      <section id="servicios" className="section-services py-24 bg-[#050811] relative border-t border-[#1E293B]">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest">Catálogo</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Tipos de Páginas Web</h2>
            <p className="text-slate-400">Arquitectura digital construida para el máximo rendimiento.</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {servicios.map((servicio, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="card-service bg-[#0A0E1A] p-8 rounded-2xl border border-[#1E293B] hover:border-[#0066FF] hover:shadow-[0_0_30px_rgba(0,102,255,0.2)] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-4xl p-3 bg-[#050811] rounded-xl border border-[#1E293B] group-hover:border-[#0066FF]/50 transition-colors">{servicio.icono}</span>
                    <span className="text-xs font-mono font-semibold bg-[#0066FF]/20 text-[#00D2FF] border border-[#0066FF]/40 px-3 py-1 rounded-full">
                      {servicio.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D2FF] transition-colors">
                    {servicio.titulo}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm font-light">
                    {servicio.descripcion}
                  </p>
                </div>
                <a href="#contacto" className="inline-flex items-center text-[#0066FF] font-semibold text-sm mt-8 group-hover:text-[#00D2FF] group-hover:translate-x-1 transition-all">
                  Solicitar cotización →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SECCIÓN QUIÉNES SOMOS */}
      <section id="nosotros" className="section-about py-24 bg-[#0A0E1A] border-t border-[#1E293B]">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="about-image-container relative rounded-2xl overflow-hidden border border-[#1E293B] group">
              <div className="absolute inset-0 bg-[#0066FF]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80" 
                alt="Programación y Desarrollo Web" 
                className="w-full h-full object-cover filter contrast-125 hover:scale-105 transition-all duration-500"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="about-content">
              <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest">Código & Arquitectura Software</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Desarrollo Web & Software A Medida</h2>
              <p className="text-slate-400 mb-4 leading-relaxed font-light">
                Diseñamos y programamos plataformas digitales utilizando tecnologías modernas como React, Node.js y bases de datos avanzadas. Nos enfocamos en escribir código limpio, mantenible y altamente optimizado.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8 font-light">
                Cada proyecto es desarrollado desde cero para garantizar la máxima velocidad de carga, seguridad robusta y una experiencia de usuario fluida en cualquier dispositivo.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. SECCIÓN CONTACTO */}
      <section id="contacto" className="section-contact py-24 bg-[#050811] border-t border-[#1E293B] relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="text-center mb-12">
              <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest">Conectemos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Iniciar Proyecto</h2>
              <p className="text-slate-400">Dejanos tus datos y nos pondremos en contacto.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#0A0E1A] p-8 md:p-12 rounded-2xl border border-[#1E293B] space-y-6 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-[#050811] border border-[#1E293B] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#050811] border border-[#1E293B] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Mensaje o Consulta</label>
                <textarea 
                  rows="4" 
                  name="mensaje"
                  required
                  placeholder="Contanos sobre tu proyecto..."
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  className="w-full bg-[#050811] border border-[#1E293B] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all placeholder:text-slate-600"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'enviando'}
                className="w-full bg-[#0066FF] hover:bg-[#0052CC] disabled:bg-slate-700 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.7)] transition-all text-center tracking-wide"
              >
                {status === 'enviando' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {status === 'exito' && (
                <p className="text-emerald-400 text-sm text-center font-mono">¡Mensaje enviado con éxito! Te responderemos pronto.</p>
              )}
              {status === 'error' && (
                <p className="text-rose-400 text-sm text-center font-mono">Ocurrió un error al enviar. Intentá nuevamente.</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="footer-main bg-[#03050B] text-slate-400 py-12 border-t border-[#1E293B]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#" className="text-xl font-black text-white"><span className="text-[#0066FF]">UNI</span>VERSUM</a>
            <p className="text-xs text-slate-500 mt-2 font-mono">© 2026 UNIVERSUM. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-white transition-colors">Quiénes Somos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

      {/* 7. BOTÓN FLOTANTE DE WHATSAPP CON ANIMACIÓN PULSANTE */}
      <motion.a 
        href={urlWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all duration-300 flex items-center justify-center group"
      >
        <svg 
          className="w-7 h-7 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </motion.a>

    </div>
  );
}