import { useState, useEffect } from "react";
import AOTservice from "../services/AOTservice";
import OrganizationsList from "../components/ListComponents/OrganizationsList";

export default function AllOrganizations() {
  // set default state
  const [organizations, setOrganization] = useState([]);
  

  //load data when page is loaded
  useEffect(() => {
    const getData = async () => {
      const organizationData = await AOTservice.getOrganizations();
      // i need to set the data.results for the pages to work
      // not sure why, need to check
      setOrganization(organizationData.results);
      
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
      <OrganizationsList organizations={organizations} />
    </>
  );
}
