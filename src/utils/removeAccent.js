export const removeAccent = (nome) => {
  return nome.normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
}