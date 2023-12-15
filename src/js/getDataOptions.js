const getDataOptions = async () => {
  const response = await fetch( window.location.origin + "/src/json/options.json");
  const options = await response.json();

  return options;
};

export default getDataOptions;
