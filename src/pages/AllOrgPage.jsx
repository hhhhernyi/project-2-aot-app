import { useState, useEffect } from "react";
import AOTservice from "../services/AOTservice";
import SearchBar from "../components/SearchBar/SearchBar";
import OrganizationsList from "../components/ListComponents/OrganizationsList";
import PageButton from "../components/Pagination/Pagination";

export default function AllOrganizations() {
  // set default state
  const [organizations, setOrganization] = useState([]);
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

  //load data when page is loaded
  useEffect(() => {
    const getData = async () => {
      const organizationData = await AOTservice.getOrganizations();
      // i need to set the data.results for the pages to work
      // not sure why, need to check
      setOrganization(organizationData.results);
      setNextPage(organizationData.info.next_page)
      setPrevPage(organizationData.info.prev_page)
      setTotalPages(organizationData.info.pages)
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <OrganizationsList organizations={organizations} nextPage={nextPage} prevPage={prevPage}/>
      <PageButton pageNumber={pageNumber} totalPages={totalPages} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber}/>
    </>
  );
}
