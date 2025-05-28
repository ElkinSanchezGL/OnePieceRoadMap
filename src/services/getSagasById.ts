import api from './api';

export const getSagaById = async (id: number, lang = 'en') => {
  try {
    const url = `/sagas/${lang}/${id}`; 
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la saga con id ${id} y lang ${lang}:`, error);
    throw error;
  }
};