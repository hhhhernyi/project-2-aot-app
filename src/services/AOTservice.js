// src/services/petService.js

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;
const AIRTABLE_URL=`${import.meta.env.VITE_AIRTABLE_SERVER_URL}`;
const AIRTABLE_API_KEY=`${import.meta.env.VITE_AIRTABLE_API_KEY}`;

async function getCharacters() {
    const url = BASE_URL + 'characters'
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getEpisodes() {
    const url = BASE_URL + 'episodes'
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getLocations() {
    const url = BASE_URL + 'locations'
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getOrganizations() {
    const url = BASE_URL + 'organizations'
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getTitans() {
    const url = BASE_URL + 'titans'
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function showCharacter(characterId) {
    const url = `https://api.attackontitanapi.com/characters/${characterId}`;
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
  async function showTitan(titanId) {
    const url = `https://api.attackontitanapi.com/titans/${titanId}`;
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
  async function showEpisode(episodeId) {
    const url = `https://api.attackontitanapi.com/episodes/${episodeId}`;
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
  async function showLocation(locationId) {
    const url = `https://api.attackontitanapi.com/locations/${locationId}`;
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
  async function showOrganization(organizationId) {
    const url = `https://api.attackontitanapi.com/organizations/${organizationId}`;
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
  async function getFavCharacters() {
    const url = AIRTABLE_URL;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": AIRTABLE_API_KEY
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function addFavCharacters(data) {
    const url = AIRTABLE_URL;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": AIRTABLE_API_KEY
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function delFavCharacters(data) {
    //const data = 'rec9ZgCLixseMnGFi'
    console.log(data)
    const url = AIRTABLE_URL+`/${data}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": AIRTABLE_API_KEY
        }
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function searchCharacters(search) {
    const url = BASE_URL + `characters?name=${search}`
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function searchEpisodes(search) {
    const url = BASE_URL + `episodes?name=${search}`
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  export default { getCharacters,showCharacter,getFavCharacters,addFavCharacters,searchCharacters,delFavCharacters, getEpisodes,showEpisode,searchEpisodes, getLocations,showLocation, getOrganizations,showOrganization, getTitans,showTitan}