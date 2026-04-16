import { useState, useEffect } from 'react';
import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    // Esse tempo garante que o React montou o DOM 
    // e as imagens começaram a processar
    const timer = setTimeout(() => {
      setPageReady(true);
    }, 500); // 500ms é um tempo "limpo", nem muito lento, nem muito rápido

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app-container ${pageReady ? 'visible' : 'loading'}`}>
      <Main />
      <Footer />
    </div>
  )
}

export default App
