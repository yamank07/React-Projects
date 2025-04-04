import { NavLink } from "react-router-dom";

export const MovieCard = ({ data }) => {
  const { imdbID, Poster, Title, Year } = data;

  return (
    <li className=" relative p-4 w-72 h-105 bg-white shrink-1 shadow-2xl hover:-translate-y-3">
      <div className="absolute -top-6">
        <figure className="hover:-translate-y-1">
          <img src={Poster} alt={Title} className="w-63 h-90 shadow-2xl" />
        </figure>
        <h1 className="text-lg font-bold text-center p-1 text-gray-700">
          {Title}
        </h1>
        {/* <p className="text-sm font-semibold text-center">{Year}</p> */}
      </div>
      <NavLink to={`/movie/${imdbID}`}>
        <button className="absolute w-[100%] left-0 top-94 text-lg px-3 py-2 bg-gray-500  hover:bg-gray-500 hover:cursor-pointer hover:text-white hover:font-bold">
          Buy Now
        </button>
      </NavLink>
    </li>
  );
};
