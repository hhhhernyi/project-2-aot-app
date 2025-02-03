import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";
import PageButton from "../components/Pagination/Pagination";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";
import ListComponents from "../components/ListComponents/ListComponent";

export default function AllLocations() {
    //set default state for locations
  const [locations, setLocations] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  // async functions
  async function getNextData() {
    const url = nextPage
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getNext() {
    const episodesData = await getNextData();
    setLocations(episodesData.results);
      setNextPage(episodesData.info.next_page)
      setPrevPage(episodesData.info.prev_page)
      setTotalPages(episodesData.info.pages)
   }
   // i need to hardcode this url as the API does not display the correct data for this particular instance
  async function getPrevData() {
    console.log(prevPage)
    const url = 'https://api.attackontitanapi.com/locations'
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getPrev() {
    const episodesData = await getPrevData();
    setLocations(episodesData.results);
      setNextPage(episodesData.info.next_page)
      setPrevPage(episodesData.info.prev_page)
      setTotalPages(episodesData.info.pages)
  }

  //functions
  function increasePageNumber() {
    setPageNumber(pageNumber+1);
  }
  function decreasePageNumber() {
    setPageNumber(pageNumber-1);
  }


  // load the location data when /location page is loaded
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const locationsData = await AOTservice.getLocations();
      setLocations(locationsData.results);
      setNextPage(locationsData.info.next_page)
      setPrevPage(locationsData.info.prev_page)
      setTotalPages(locationsData.info.pages)
      setIsLoading(false)
      
    };
    getData();
  }, []);

  // not sure if using case switch is better here
  function fixAllImages() {
    for (let i=0; i< locations.length; i++) {
      if (locations[i].name === 'Karifa') {
        locations[i].img = 'https://static.wikia.nocookie.net/shingekinokyojin/images/f/f5/Large_scale_view_of_Karifa.png/revision/latest/scale-to-width-down/180?cb=20230515170551';
      } else if (locations[i].name === "Yarckel District") {
        locations[i].img ='https://static.wikia.nocookie.net/shingekinokyojin/images/6/6b/Ehrmich_District.png/revision/latest/scale-to-width-down/180?cb=20230515170551'
      } else if (locations[i].name === "Industrial City") {
        locations[i].img ='https://static.wikia.nocookie.net/shingekinokyojin/images/7/72/Industrial_City.png/revision/latest/scale-to-width-down/180?cb=20230515170551'
      } else if (locations[i].name === "Jinae" || locations[i].name === "Odel" || locations[i].name === "Utopia District" || locations[i].name === "Snate") {
        locations[i].img = 'https://pm1.aminoapps.com/6461/83ca49265461b9fb0bc46324e9abb27df6a7a7f2_00.jpg/revision/latest/scale-to-width-down/180?cb=20230515170551'
      } else if (locations[i].name === "Krolva District") {
        locations[i].img ='https://static.wikia.nocookie.net/shingekinokyojin/images/a/ad/Trost_District.png/revision/latest/scale-to-width-down/180?cb=20230515170551'
      } else if ( locations[i].name === "Hizuru") {
        locations[i].img ='https://otakusnotes.com/wp-content/uploads/2023/08/attack-on-titan-map_Hizuru.webp/revision/latest/scale-to-width-down/180?cb=20230515170551'
      } else if (locations[i].name === "Lakua") {
        locations[i].img ='https://pm1.aminoapps.com/6771/dce3e7ebf1da73e03e4584fea96b508d86ada265v2_hq.jpg/revision/latest/scale-to-width-down/180?cb=20230515170551'
      }
    }
  }

  fixAllImages();

  return (
    <>
      {isLoading? <LoadingAnimation/>:null}
      <ListComponents data={locations} name='locations' className='cardComponent' />
      <PageButton pageNumber={pageNumber} totalPages={totalPages} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} getNext={getNext} getPrev={getPrev}/>
    </>
  );
}
