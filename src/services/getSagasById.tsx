import api from './api'; 

export const getSagaById = async (id: number) => {
  try {
    const response = await api.get(`/sagas/en/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la saga con id ${id}:`, error);
    throw error;
  }
};
