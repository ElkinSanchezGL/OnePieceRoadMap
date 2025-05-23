import api from './api';

export const getSagaById = async (id: number) => {
  const response = await api.get(`/sagas/en/${id}`);
  return response.data;
};

export const getArcsBySagaId = async (id: number) => {
  const response = await api.get(`/arcs/en`, {
    params: { saga: id }
  });
  return response.data;
};

export const getCharactersBySagaId = async (id: number) => {
  const response = await api.get(`/characters/en`, {
    params: { saga: id }
  });
  return response.data;
};

export const getEpisodesBySagaId = async (id: number) => {
  const response = await api.get(`/episodes/en`, {
    params: { saga: id }
  });
  return response.data;
};

export const getLocationById = async (locationId: number) => {
  try {
    const response = await api.get(`/locates/en/${locationId}`);
    return response.data;
  } catch (error) {
    
    console.error(`Error al obtener la ubicación con ID ${locationId}:`, error);
    return null; 
  }
};
