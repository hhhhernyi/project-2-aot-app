import EpisodesList from "../components/ListComponents/EpisodesList";
import PageButton from "../components/Pagination/Pagination";
import SearchBar from "../components/SearchBar/SearchBar";
import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";

export default function AllEpisodesPage() {
  // set a default state for episodes
  const [episodes, setEpisodes] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  //functions
  function increasePageNumber() {
    console.log('increase page number function run')
    setPageNumber(pageNumber+1);
  }
  function decreasePageNumber() {
    console.log('decrease page number function run')
    setPageNumber(pageNumber-1);
  }

  //load the episodes data on loading the /episodes page
  useEffect(() => {
    const getData = async () => {
      const episodesData = await AOTservice.getEpisodes();
      setEpisodes(episodesData.results);
      setNextPage(episodesData.info.next_page)
      setPrevPage(episodesData.info.prev_page)
      setTotalPages(episodesData.info.pages)
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <EpisodesList episodes={episodes} nextPage={nextPage} prevPage={prevPage}/>
      <PageButton pageNumber={pageNumber} totalPages={totalPages} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber}/>
    </>
  );
}
