import { useState, useEffect } from "react";
import AOTservice from "../services/AOTservice";
import TitansList from "../components/ListComponents/TitansList";
import PageButton from "../components/Pagination/Pagination";

export default function AllTitansPage() {
  //set a default state for titans
  const [titans, setTitans] = useState([]);
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

  // load the titans data on loading the /titans page
  useEffect(() => {
    const getData = async () => {
      const titansData = await AOTservice.getTitans();
      setTitans(titansData.results);
      setNextPage(titansData.info.next_page)
      setPrevPage(titansData.info.prev_page)
      setTotalPages(titansData.info.pages)
    };
    getData();
  }, []);

  return (
    <>
      <TitansList titans={titans} nextPage={nextPage} prevPage={prevPage} />
      <PageButton pageNumber={pageNumber} totalPages={totalPages} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber}/>
    </>
  );
}
