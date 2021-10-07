export const normalizeSpokeResponse = (spoke) =>
  spoke.map((data) => ({
    id: data.id_falada,
    title: data.lingua.nome,
    origin: data.lingua.tronco?.nome || 'Não indentificado',
    ethnicities: ['Caingangues', 'Kainguangs'],
    states: ['Goiás', 'Distrito Federal'],
    latitude: data.localidade.latitude,
    longitude: data.localidade.longitude,
  }));
