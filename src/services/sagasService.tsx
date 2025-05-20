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

export const getLocationsBySagaId = async (id: number) => {
  const response = await api.get(`/locates/en/${id}`);
  return response.data;
};
