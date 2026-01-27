import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, X, ArrowRight } from 'lucide-react';

export function TrainingPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('trainingPopupSeen');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('trainingPopupSeen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-scale-in">
      <div className="relative bg-primary-500 rounded-2xl shadow-2xl border border-blue-500/50">
        <button
          onClick={handleClose}
          className="absolute top-4 right-2 p-4 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 hover:scale-110 group z-20"
          aria-label="Cerrar"
        >
          <X className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="p-6 text-white relative">

          <div className="relative z-10">
            <div className="inline-flex p-3 bg-white/20 backdrop-blur-sm rounded-xl mb-4 border border-white/30">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-xl font-bold mb-2 leading-tight">
              Capacitaciones en Datos Abiertos
            </h3>

            <p className="text-blue-100 text-sm mb-5 leading-relaxed">
              Participa en nuestros talleres especializados y certificaciones. Fortalece tus capacidades en análisis de datos.
            </p>

            <Link
              to="/formacion"
              onClick={() => handleClose()}
              className="group inline-flex items-center px-5 py-3 bg-white text-blue-600 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full justify-center"
            >
              Regístrate Ahora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400"></div>
      </div>
    </div>
  );
}
