import { useState, useEffect } from "react";
import AOTservice from "../services/AOTservice";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";
import ListComponents from "../components/ListComponents/ListComponent";

export default function AllTitansPage() {
  //set a default state for titans
  const [titans, setTitans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // load the titans data on loading the /titans page
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const titansData = await AOTservice.getTitans();
      setTitans(titansData.results);
      setIsLoading(false)
    };
    getData();
  }, []);


  function fixAllImages() {
    for (let i=0; i< titans.length; i++) {
      if (titans[i].id === 4) {
        titans[i].img = 'https://static.wikia.nocookie.net/shingekinokyojin/images/b/b4/The_Colossal_Titan_outside_Shiganshina.png/revision/latest/scale-to-width-down/350?cb=20210322020257';
      } else if (titans[i].id === 8){
        titans[i].img = 'https://static.wikia.nocookie.net/shingekinokyojin/images/d/da/Jaw_Titan_%28Anime%29_character_image_%28Porco_Galliard%29.png/revision/latest/scale-to-width-down/350?cb=20210322020257';
      } 
      
    }
  }

  fixAllImages();


  return (
    <>
      {isLoading? <LoadingAnimation/>:null}
      <ListComponents data={titans} name='titans' className='cardComponent'/>
    </>
  );
}
