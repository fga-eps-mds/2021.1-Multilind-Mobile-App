export const removeAccent = (nome) =>
  nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
