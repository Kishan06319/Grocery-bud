const getLocalStorage = () => {
  let items = localStorage.getItem("groceryList");
  if (items) {
    return JSON.parse(items);
  }
  return [];
};

let groceryList = getLocalStorage();
