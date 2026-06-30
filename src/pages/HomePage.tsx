import { useEffect } from 'react';
import Hero from '../components/Hero';
import { useFetch } from '../hooks/useFetch';

export default function HomePage() {
  const { request } = useFetch();

  useEffect(() => {
    request('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders');
  }, [request]);

  return <Hero />;
}
