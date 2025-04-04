export const getMovie = async ({ params }) => {
  console.log(params);

  const API = import.meta.env.VITE_API_KEY;
  const URL = `https://www.omdbapi.com/?apikey=${API}&s=Batman&page`;
  //   const header = { type: "application/json" };

  try {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(errormessage);
  }
};
