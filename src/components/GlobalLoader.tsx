import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import loaderGif from '../../assets/img/loader.gif';

export function GlobalLoader() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timeout = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(timeout);
  }, [location]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm">
      <img
        src={loaderGif}
        alt="Cargando contenido"
        className="object-contain"
        style={{ width: '600px', height: '600px' }}
      />
    </div>
  );
}
