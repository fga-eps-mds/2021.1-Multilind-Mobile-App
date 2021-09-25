const sortName = (array) => {
  var newArray = [...array];
  return newArray.sort((a, b) => {
    var nameA = a.nome.toUpperCase();
    var nameB = b.nome.toUpperCase();
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
  var newArray = [...array];
  return newArray.sort((a, b) => {
    var nameA = a.nome.toUpperCase();
    var nameB = b.nome.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
};

export { sortName, inverseSortName };
