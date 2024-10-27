import React, { useEffect } from 'react';
import NavBar from './navbar/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './footer/footer';
import Body from './body/body';
import ContactForm from './ContactForm';

function App() {
  useEffect(() => {
    const app = document.querySelector('.App');
    function handleScroll() {
      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const bgPosition = scrollPercentage * 100;
      if (app) {
        app.style.backgroundPosition = `0% ${bgPosition}%`;
      }
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Body />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

