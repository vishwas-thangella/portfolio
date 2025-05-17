import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Particle from './components/Particle';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {

  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);

  return (
    <div className="w-full relative overflow-hidden">
      <div className="absolute w-full top-0 left-0 -z-10">
        <Particle />
      </div>
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}

export default App;
