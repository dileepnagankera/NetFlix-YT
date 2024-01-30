import { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.RequestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <div className="absolute w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="font-bold text-red-500 p-6 text-4xl">
            {movie?.title}
          </h1>
          <div>
            <button className="border bg-gray-300 text-white border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2 px-5 ml-4">
              Watch Leter
            </button>
          </div>
          <p className="text-gray-500 text-sm p-6 font-bold">
            Released: {movie?.release_date}
          </p>
          <>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncateString(movie?.overview)}
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default Main;
