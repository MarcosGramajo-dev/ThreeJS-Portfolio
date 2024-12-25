import Eclipse from './assets/eclipse.svg';
import React, { useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";

function Main() {
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  useEffect(() => {
    // Simula el proceso de carga
    const timer = setTimeout(() => setIsLoading(false), 2000); // Cambia el tiempo según tus necesidades
    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);

  if (isLoading) {
    // Renderiza el indicador de carga
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-900">
        <img src={Eclipse} alt="Cargando..." className="animate-spin" />
      </div>
    );
  }

  return (
    <React.StrictMode>
      <ThemeProvider>
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-screen h-screen bg-gray-900">
              <img src={Eclipse} alt="Cargando..." />
            </div>
          }
        >
          <App />
        </Suspense>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
