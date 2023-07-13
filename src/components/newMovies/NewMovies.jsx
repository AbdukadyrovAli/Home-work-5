import React from "react";
import { MainContent } from "../mainContent/MainContent";

export const NewMovies = ({ movie, setMovie, updateMovie }) => {
  return (
    <div>
      {movie.map((el) => {
        return (
          <MainContent
            setMovie={setMovie}
            updateMovie={updateMovie}
            movie={movie}
            el={el}
          />
        );
      })}
    </div>
  );
};
