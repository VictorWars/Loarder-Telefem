import React, { useState, useEffect } from 'react';
import './styles.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando una carga asincrónica, por ejemplo, con un temporizador
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="content">
        {/* Contenido de tu aplicación */}
        {!isLoading && <h1>¡Contenido cargado!</h1>}
      </div>
    </div>
  );
};

export default App;