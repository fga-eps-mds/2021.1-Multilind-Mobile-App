export const normalizeSpokeResponse = (spoke) =>
  spoke.map((data) => ({
    id: data.id_conteudo,
    title: data.lingua.nome,
    origin: data.lingua.tronco?.nome || 'Não indentificado',
    ethnicities: ['Caingangues', 'Kainguangs'],
    latitude: data.localidade.latitude,
    longitude: data.localidade.longitude,
  }));
