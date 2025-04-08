import { NavLink, useLoaderData, useParams } from "react-router-dom";

export const MovieDetails = () => {
  const params = useParams();
  const loaderData = useLoaderData();

  const {
    Title,
    Poster,
    Type,
    Year,
    Plot,
    Awards,
    Runtime,
    BoxOffice,
    imdbRating,
    Director,
    Actors,
    Genre,
    Writer,
    Language,
    Released,
  } = loaderData;

  const rateBGColor = {
    backgroundColor:
      imdbRating > 8.0 ? "green" : imdbRating > 5.0 ? "yellow" : "red",
    color: imdbRating > 8.0 ? "white" : imdbRating > 5.0 ? "black" : "white",
  };
  const rateColor = {
    color: imdbRating > 8.0 ? "white" : imdbRating > 5.0 ? "black" : "white",
  };

  let hour = Math.floor(parseInt(Runtime) / 60);
  let min = parseInt(Runtime) % 60;
  let updatedRuntime = `${hour}hrs ${min}mins`;

  return (
    <>
      <section className="w-vw h-195 p-5 text-white bg-gray-700">
        <h1 className="text-5xl pb-5 font-bold text-center mDetails">
          {Title}
        </h1>
        <div className="max-w-[70%] p-5 m-auto flex justify-evenly">
          <div>
            <figure className="w-105 shadow-2xl">
              <img
                src={Poster}
                alt={Title}
                className="w-105 m-auto shadow-2xl"
              />
            </figure>
          </div>
          <section className="flex flex-col gap-3 p-5 mx-10 bg-gray-200/20">
            <h1 className="text-3xl font-bold text-center mDetails">
              Movie Info
            </h1>
            <div className="flex justify-center p-2">
              <div className="flex justify-evenly items-center">
                <p
                  className="text-lg font-bold px-4 py-2 rounded-4xl"
                  style={rateBGColor}
                >
                  #{Type.toUpperCase()}
                </p>
                <p className="text-lg font-bold px-4 py-2">{Year}</p>
              </div>
            </div>
            <p className="text-lg text-semibold">{Plot}</p>
            <p className="text-lg text-center">{Awards}</p>
            <div className="flex gap-5 justify-center">
              <p className="text-lg px-5 py-2">{updatedRuntime}</p>
              <p className="text-lg px-5 py-2">{BoxOffice}</p>
              <p className="text-lg px-5 py-2 rounded-4xl" style={rateBGColor}>
                <span className="font-semibold">Rating: </span> {imdbRating}
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-lg">
                <span className="font-bold">Director: </span>
                {Director}
              </p>
              <p className="text-lg">
                <span className="font-bold">Casts: </span>
                {Actors}
              </p>
              <p className="text-lg">
                <span className="font-bold">Genres: </span>
                {Genre}
              </p>
              <p className="text-lg">
                <span className="font-bold">Writers: </span>
                {Writer}
              </p>
              <p className="text-lg">
                <span className="font-bold">Language: </span>
                {Language}
              </p>
              <p className="text-lg">
                <span className="font-bold">Released: </span>
                {Released}
              </p>
            </div>
            <div className="flex justify-around">
              <NavLink
                to="/movie"
                className=" w-70 m-auto py-4 text-lg text-center border text-white font-semibold rounded-4xl"
                style={rateBGColor}
              >
                Go Back
              </NavLink>
              <NavLink
                to="/cart"
                className=" w-70 m-auto py-4 text-lg text-center border text-white font-semibold rounded-4xl bg-red-500 hover:bg-red-600"
              >
                Add to Cart
              </NavLink>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
