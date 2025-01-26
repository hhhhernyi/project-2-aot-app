import { useState, useEffect } from "react";
import AOTservice from "../services/AOTservice";
import SearchBar from "../components/SearchBar/SearchBar";
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

  return (
    <>
      <SearchBar />
      <OrganizationsList organizations={organizations} />
    </>
  );
}
