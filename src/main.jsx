import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import Loading from './components/Loading.jsx';

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula el proceso de carga
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider>
        {isLoading ? <Loading /> : <App />}
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
