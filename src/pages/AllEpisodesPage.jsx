import EpisodesList from "../components/ListComponents/EpisodesList";
import SearchBar from "../components/SearchBar";
import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";

export default function AllEpisodesPage() {
  // set a default state for episodes
  const [episodes, setEpisodes] = useState([]);

  //load the episodes data on loading the /episodes page
  useEffect(() => {
    const getData = async () => {
      const episodesData = await AOTservice.getEpisodes();
      setEpisodes(episodesData.results);
    };
    getData();
  }, []);

  return (
    <>
      <h2>all episodes showed here</h2>
      <SearchBar />
      <EpisodesList episodes={episodes} />
    </>
  );
}
