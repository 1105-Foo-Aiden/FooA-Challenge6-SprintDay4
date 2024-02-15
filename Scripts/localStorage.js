const saveToLocalStorage = (number) => {
  let history = getlocalStorage();
  if (!history.includes(number)) {
    history.push(number);
  }
  localStorage.setItem("History", JSON.stringify(history));
};

const getlocalStorage = () => {
  let localStorageData = localStorage.getItem("History");
  if (localStorageData == null) {
    return [];
  }
  return JSON.parse(localStorageData);
};

const removeFromLocalStorage = (number) => {
  let history = getlocalStorage();
  let namedIndex = history.indexOf(number);
  history.splice(namedIndex, 1);
  localStorage.setItem("History", JSON.stringify(history));
};

export { saveToLocalStorage, getlocalStorage, removeFromLocalStorage };
