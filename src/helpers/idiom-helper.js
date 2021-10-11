export const normalizeSpokeResponse = (idiom) =>
  idiom.map((data) => ({
    id: data.id_conteudo,
    title: data.lingua.nome,
    origin: data.lingua.tronco?.nome || 'Isolada',
    ethnicities: data.lingua?.etnia?.map((e) => e.nome),
    latitude: data.localidade.latitude,
    longitude: data.localidade.longitude,
  }));
