import { useState, useEffect } from "react";
export default function LocationDetails(props) {
  const [image, setImage] = useState('');
  const [episodeNumber, setEpisodeNumber] = useState('')
  useEffect(()=>{
        const getData = async () => {
          let locationImage=''
          const locationDebut = await props.location.debut.slice(42)
           locationImage = await props.location.img.slice(0,-58);
          setEpisodeNumber(locationDebut);
          if (props.location.name==="Karifa") {
            locationImage='https://static.wikia.nocookie.net/shingekinokyojin/images/f/f5/Large_scale_view_of_Karifa.png';
            setImage(locationImage)
          } else if (props.location.name === "Yarckel District") {
            locationImage ='https://static.wikia.nocookie.net/shingekinokyojin/images/6/6b/Ehrmich_District.png'
            setImage(locationImage)
          } else if (props.location.name === "Industrial City") {
            locationImage ='https://static.wikia.nocookie.net/shingekinokyojin/images/7/72/Industrial_City.png'
            setImage(locationImage)
          } else if (props.location.name === "Jinae" || props.location.name === "Odel" || props.location.name === "Utopia District" || props.location.name === "Snate") {
            locationImage = 'https://pm1.aminoapps.com/6461/83ca49265461b9fb0bc46324e9abb27df6a7a7f2_00.jpg'
            setImage(locationImage)
          } else if (props.location.name === "Krolva District") {
            locationImage ='https://static.wikia.nocookie.net/shingekinokyojin/images/a/ad/Trost_District.png'
            setImage(locationImage)
          } else if ( props.location.name === "Hizuru") {
            locationImage ='https://otakusnotes.com/wp-content/uploads/2023/08/attack-on-titan-map_Hizuru.webp'
            setImage(locationImage)
          } else if (props.location.name === "Lakua") {
            locationImage ='https://pm1.aminoapps.com/6771/dce3e7ebf1da73e03e4584fea96b508d86ada265v2_hq.jpg'
            setImage(locationImage)
          }else {
            setImage(locationImage)
          }
          
        };
        getData()
      },[props]) 
    console.log(props)


    return (
      <>
      <img src={image} className="episodeDetail"/>
        <h3>{props.location.name}</h3>
        <p>Territory: {props.location.territory}</p>
        <p>Region: {props.location.region}</p>
        <p>Anime Debut: Episode {episodeNumber}</p>
  
        
      </>
    );
  }