import { useState, useEffect } from "react";
import AOTservice from "../services/AOTservice";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";
import ListComponents from "../components/ListComponents/ListComponent";

export default function AllOrganizations() {
  // set default state
  const [organizations, setOrganization] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  //load data when page is loaded
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const organizationData = await AOTservice.getOrganizations();
      // i need to set the data.results for the pages to work
      // not sure why, need to check
      setOrganization(organizationData.results);
      setIsLoading(false)
      
    };
    getData();
  }, []);
  function fixImages() {
    for (let i=0; i< organizations.length; i++) {
      if(organizations[i].name ==='Reeves Company'){
        organizations[i].img='https://static.wikia.nocookie.net/shingekinokyojin/images/3/3b/Flegel_declares_himself_boss_of_the_Reeves_Company.png/revision/latest/scale-to-width-down/350?cb=20210322020257'
      } else if (organizations[i].name ==='Titan Biology Research Society') {
        organizations[i].img='https://static.wikia.nocookie.net/shingekinokyojin/images/3/39/Marleyan_officers_using_serums.png/revision/latest/scale-to-width-down/350?cb=20210322020257'
      }
    }
  }
  fixImages();

  return (
    <>
      {isLoading? <LoadingAnimation/>:null}
      <ListComponents data={organizations} name='organizations' className='cardComponent'/>
    </>
  );
}
