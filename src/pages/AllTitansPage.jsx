import { useState, useEffect } from "react";
import AOTservice from "../services/AOTservice";
import TitansList from "../components/ListComponents/TitansList";

export default function AllTitansPage() {
  //set a default state for titans
  const [titans, setTitans] = useState([]);

  // load the titans data on loading the /titans page
  useEffect(() => {
    const getData = async () => {
      const titansData = await AOTservice.getTitans();
      setTitans(titansData.results);
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

  //console.log('titans state: ', titans)

  return (
    <>
      <TitansList titans={titans} />
    </>
  );
}
