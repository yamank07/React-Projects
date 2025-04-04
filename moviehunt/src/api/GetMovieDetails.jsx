export const getMovieDetails = async ({ params }) => {
  const id = params.movieID;
  console.log(params);

  const API = import.meta.env.VITE_API_KEY;
  const URL = `http://www.omdbapi.com/?i=${id}&apikey=${API}`;
  //   const header = { type: "application/json" };

  try {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
