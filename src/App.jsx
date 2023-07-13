import "./App.css";
import { useState } from "react";
import { Headers } from "./components/headers/Headers";
import { NewMovies } from "./components/newMovies/NewMovies";

function App() {
  const [movie, setMovie] = useState([
    {
      id: 1,
      title: "kino",
      rating: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6vd_OJqV5-oR0v1mDsy07Tq4j9xKfRUIbg&usqp=CAU",
    },
    {
      id: 2,
      title: "serial",
      rating: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTRFRQIJ_t52CpIZVD0WAVnBkSq5yCcB9YQ&usqp=CAU",
    },
  ]);

  const newMovie = (data) => {
    const updatedMovie = [...movie];
    updatedMovie.push(data);
    setMovie(updatedMovie);
  };

  const updateMovie = (data) => {
    const newMovie = [...movie].map((item) => {
      if (item.id === data.id) {
        item.title = data.title;
        item.img = data.img;
        item.rating = data.rating;
      }
      return item;
    });
    setMovie(newMovie);
  };

  return (
    <div className="App">
      <Headers newMovie={newMovie} />
      <NewMovies movie={movie} setMovie={setMovie} updateMovie={updateMovie} />
    </div>
  );
}

export default App;
