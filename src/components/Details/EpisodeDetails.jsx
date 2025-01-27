export default function EpisodeDetails(props) {
    console.log(props)
    let img = ''
    async function getImg() {
        img = props.episode.img.slice(0,-58);
        return img;
    }
    getImg();
    return (
      <>
      <img src={img} className="episodeDetail" />
        <h3 className="episodeDetail">{props.episode.name}</h3>
        <p>Episode Number: {props.episode.episode}</p>
  
        
      </>
    );
  }