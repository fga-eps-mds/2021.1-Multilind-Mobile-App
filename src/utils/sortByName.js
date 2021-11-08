const sortName = (array) => {
  const newArray = [...array];
  return newArray.sort((a, b) => {
    const nameA = a.nome.toUpperCase();
    const nameB = b.nome.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

const sortMeaning = (array) => {
  const newArray = [...array];
  return newArray.sort((a, b) => {
    const nameA = a.significado.toUpperCase();
    const nameB = b.significado.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

const inverseSortName = (array) => {
  const newArray = [...array];
  return newArray.sort((a, b) => {
    const nameA = a.nome.toUpperCase();
    const nameB = b.nome.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
};

export { sortName, inverseSortName, sortMeaning };
