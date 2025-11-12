
import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Route, Clock, Smartphone, Users, Globe, Phone, Mail, MapPinIcon, Code, Link as LinkIcon, StarIcon, ArrowDownToLine, MessageCircleQuestion } from 'lucide-react';
import logo from '../assets/qruta-name-black.svg';
import logo_white from '../assets/qruta-name.png';
import politicas from '../assets/politicas-de-privacidad.pdf';
import terminos from '../assets/terminos-y-condiciones-del-uso.pdf';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const links = {
    playstore: "https://play.google.com/store/apps/details?id=com.lui2mi.queruta",
    appstore: "https://apps.apple.com/co/app/qruta/id1103537963",
    pwa: "https://m.queruta.com/",
    facebook: "https://www.facebook.com/queruta",
    instagram: "https://www.instagram.com/queruta/",
    twitter: "https://twitter.com/QRuta1"
  }
  const cities = [
    'Armenia', 'Barranquilla', 'Bogotá', 'Bucaramanga', 'Cali',
    'Cartagena','Ibagué' ,'Medellín', 'Neiva', 'Pasto', 'Santa Marta',
    'Tunja', 'Valledupar'
  ];

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Rutas Cercanas",
      description: "Ve qué rutas transitan cerca de tu ubicación actual en tiempo real"
    },
    {
      icon: <Route className="w-8 h-8" />,
      title: "Cálculo de Rutas",
      description: "Encuentra la mejor manera de llegar a cualquier destino en la ciudad"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Horarios y Paradas",
      description: "Consulta horarios detallados y ubicación exacta de todas las paradas"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Noticias del Transporte",
      description: "Mantente informado sobre novedades del sistema de transporte público"
    }
  ];
  const tools = [
    {
      icon: <Route className="w-8 h-8" />,
      name: "Rutas Por Empresa",
      description: "Genera widgets embebidos de rutas por empresa",
      link: "/routes"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      name: "Rutas Cercanas",
      description: "Crea widgets de rutas cercanas a una ubicación específica",
      link: "/near-routes"
    }
  ];
  return (
    <div className="min-h-screen bg-white font-nunito">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={logo} alt="Q'ruta Logo" className="h-8 w-auto" />
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Inicio
                </a>
                <a href="#features" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Características
                </a>
                <a href="#tools" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Herramientas
                </a>
                <a href="#cities" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Ciudades
                </a>
                <a href="#contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contacto
                </a>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a href={links.playstore} className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <i className="fab fa-google-play mr-2"></i>
                Google Play
              </a>
              <a href={links.appstore} className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <i className="fab fa-apple mr-2"></i>
                App Store
              </a>
              <a href={links.pwa} className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <i className="fab fa-solid fa-globe mr-2"></i>
                Web
              </a>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary focus:outline-none"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Inicio
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Características
              </a>
              <a href="#tools" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Herramientas
              </a>
              <a href="#cities" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Ciudades
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Contacto
              </a>
              <div className="pt-4 pb-2 space-y-2">
                <a href={links.playstore} className="w-full bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors block text-center">
                  <i className="fab fa-google-play mr-2"></i>
                  Google Play
                </a>
                <a href={links.appstore} className="w-full bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors block text-center">
                  <i className="fab fa-apple mr-2"></i>
                  App Store
                </a>
                <a href={links.pwa} className="w-full bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors block text-center">
                  <i className="fab fa-solid fa-globe mr-2"></i>
                  Web
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="#" className="pt-16 pb-20 bg-gradient-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center pt-5">
            <div className={`lg:col-span-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Tu guía de
                <span className="block text-accent">transporte público</span>
                en Colombia
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Encuentra las mejores rutas, horarios y paradas del transporte público en las principales ciudades de Colombia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={links.playstore} className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center">
                  <i className="fab fa-google-play mr-2"></i>
                  Descargar para Android
                </a>
                <a href={links.appstore} className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center">
                  <i className="fab fa-apple mr-2"></i>
                  Descargar para iOS
                </a>
              </div>
              <p className="text-gray-300">
                <i className="fas fa-globe mr-2"></i>
                También disponible como PWA (Progressive Web App)
              </p>
            </div>
            <div className="lg:col-span-6 mt-10 lg:mt-0">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 animate-float">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Aplicación Móvil</h3>
                        <p className="text-sm text-gray-300">Android, iOS y Web</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{cities.length} Ciudades</h3>
                        <p className="text-sm text-gray-300">Expandiéndose por Colombia</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <StarIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Calificación</h3>
                        <p className="text-sm text-gray-300">4.4</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <ArrowDownToLine className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Descargas</h3>
                        <p className="text-sm text-gray-300">50 mil+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Todo lo que necesitas para moverte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Q'ruta te ofrece todas las herramientas necesarias para que tu viaje en transporte público sea más fácil y eficiente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tools Section */}
      <section id="tools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Herramientas para Desarrolladores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integra widgets de Q'ruta en tu sitio web o aplicación con nuestros generadores de código.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-accent mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {tool.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tool.description}
                </p>
                <a
                  href={tool.link}
                  className="inline-flex items-center bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Generar Código
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Cómo funciona Q'ruta?
            </h2>
            <p className="text-xl text-gray-600">
              Usar Q'ruta es muy sencillo. Solo sigue estos pasos:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Ingresa tu destino
              </h3>
              <p className="text-gray-600">
                Escribe dónde quieres ir o selecciona un punto en el mapa. Q'ruta calculará las mejores opciones para llegar.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Elige tu ruta
              </h3>
              <p className="text-gray-600">
                Revisa las diferentes opciones de rutas, horarios y paradas. Selecciona la que mejor se adapte a tus necesidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                ¡Viaja tranquilo!
              </h3>
              <p className="text-gray-600">
                Sigue las indicaciones paso a paso y recibe notificaciones sobre tu viaje en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section id="cities" className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Disponible en las principales ciudades de Colombia
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Q'ruta está presente en {cities.length} ciudades colombianas y seguimos expandiéndonos para llegar a más lugares.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <MapPinIcon className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold">{city}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-200 mb-4">
              <Globe className="w-6 h-6 inline mr-2" />
              Próximamente a nivel internacional
            </p>
            <p className="text-gray-300">
              Estamos trabajando para llevar Q'ruta a más países de Latinoamérica
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600">
              ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.
            </p>
          </div>

          <div className="">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-primary mb-8">
                Información de contacto
              </h3>
              <div className="space-y-6 mb-12">
                <div className="flex items-center justify-center">
                  <MessageCircleQuestion className="w-6 h-6 text-accent mr-4" />
                  <span className="text-gray-600 text-lg">+57 (301) 366-2941</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent mr-4" />
                  <span className="text-gray-600 text-lg">queruta@gmail.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent mr-4" />
                  <span className="text-gray-600 text-lg">Barranquilla, Colombia</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-6">Síguenos</h4>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-light transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-light transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-light transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logo_white} alt="Q'ruta Logo" className="h-8 w-auto" />
              <p className="text-gray-300">
                Tu compañero confiable para el transporte público en Colombia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Descarga la App</h4>
              <div className="space-y-2">
                <a href={links.playstore} className="block text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-google-play mr-2"></i>
                  Google Play Store
                </a>
                <a href={links.appstore} className="block text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-apple mr-2"></i>
                  Apple App Store
                </a>
                <a href={links.pwa} className="block text-gray-300 hover:text-white transition-colors">
                  <i className="fas fa-globe mr-2"></i>
                  Web
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
                <a href="#features" className="block text-gray-300 hover:text-white transition-colors">
                  Características
                </a>
                <a href="#tools" className="block text-gray-300 hover:text-white transition-colors">
                  Herramientas
                </a>
                <a href="#cities" className="block text-gray-300 hover:text-white transition-colors">
                  Ciudades
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href={links.facebook} className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href={links.instagram} className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href={links.twitter} className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="border-gray-600 my-8" />
          <div className="text-center text-gray-300">
            <p>&copy; 2025 Q'ruta. Todos los derechos reservados. <a href='/privacy-policies'>Política de privacidad</a> y <a href={terminos} target="_blank">condiciones de uso</a></p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-accent hover:bg-accent-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default Index;
