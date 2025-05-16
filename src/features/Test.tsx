import React, { useEffect, useState } from 'react';
import { getSagaById } from '../services/getSagasById';
import Background from '../components/Background';

export const Test = () => {
  const [title, setTitle] = useState('');
useEffect(() => {
  const fetchSaga = async () => {
    try {
      const data = await getSagaById(2);
      console.log('Saga recibida:', data);
      setTitle(data.tittle || data.title || 'No se encontró título');
    } catch (error) {
      console.error('No se pudo cargar el título', error);
    }
  };

  fetchSaga();
}, []);

  return (
    <Background>
    <div className="text-black4''eew p-8">
      <h1 className="text-3xl font-bold">{title || 'Cargando título...'}</h1>
    </div>
    </Background>
    
  );
};

export default Test;
