import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

function App() {
  const [animes, setAnimes] = useState([]);
  const [term, setTerm] = useState("naruto");

  const getAnime = async (name) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`);
    const data = await response.json();
    console.log(data.data);
    setAnimes(data.data);
  };

  useEffect(() => {
    getAnime("naruto");
  }, []);

  return (
    <>
      <h1>Anime Search</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Search for anime e.g Naruto"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={() => getAnime(term)}>Search</button>
      </div>
      <div className="container">
        {animes?.length > 0 ? (
          animes.map((anime, index) => <AnimeCard key={index} anime={anime} />)
        ) : (
          <div>Not Found</div>
        )}
      </div>
    </>
  );
}

export default App;
