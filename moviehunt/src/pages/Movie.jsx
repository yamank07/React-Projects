import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { MovieCard } from "../ui/MovieCard";
import { Search } from "../ui/Search";

export const Movie = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const params = useParams();
  const movieData = useLoaderData();
  // console.log(movieData);

  useDebounce(() => setDebouncedSearchTerm(search), 1000, [search]);

  const handleOnChange = (value) => {
    setSearch(value);
  };

  const searchData = (search) => {
    movieData.Search.filter((curElem) => {
      if (curElem.Title.toLowerCase().includes(search.toLowerCase())) {
        // console.log(curElem.Title);
      }
      return curElem.Title;
    });
  };

  useEffect(() => {
    searchData(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <>
      <main className="bg-gray-700 p-5">
        <h1 className="text-5xl text-center text-white font-bold leading-[5rem] p-5 mr-20">
          Movies to Watch
        </h1>
        <section className="w-90% m-auto px-155">
          <Search search={search} handleOnChange={handleOnChange} />
        </section>
        <ul className="w-[75%] m-auto grid grid-cols-4 gap-y-20 items-center">
          {
            // searchData.l
            movieData &&
              movieData.Search.map((curMovie) => {
                return <MovieCard key={curMovie.imdbID} data={curMovie} />;
              })
          }
        </ul>
      </main>
    </>
  );
};
