import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import { useFetch } from './hooks/useFetch';

export default function App() {
  const { request } = useFetch();

  useEffect(() => {
    request('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders');
  }, [request]);

  return (
    <div className="page">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
