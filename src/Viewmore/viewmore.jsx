import React , {useState,useEffect}from "react"
import "C:/Users/PC/Downloads/test/test/my-app/src/Viewmore/viewmore.css"

function Viewmore({topAnime}){
    const [anime,setAnime]=useState([])
    const GetAnime = async () => {
        const temp = await fetch("https://api.jikan.moe/v4/seasons/now")
        .then(res => res.json());
      
      setAnime(temp.data);
      
        };
    useEffect(() => {
        GetAnime()
        },[]);

        if (anime.length === 0) {
            return null; 
        }

        const item=anime[10]
    return <div>
        <section className="container">
                <div key={item.id}>
                    <div className="cont-1">
                    <img src={item.images.jpg.large_image_url} alt=""/>
                    <div className="detailsSec">
                    <p>{item.title}</p> 
                    <p>{item.synopsis}</p> 
                    <div className="descriptionContainer">
                    <div className="desc1">
                    <p>Type: {item.type}</p>
                    {item.studios.map(studio => (
                    <p key={studio.mal_id}>Studios: {studio.name}</p>
                    ))}
                    <p>Date aired: {item.aired.prop.from.year}</p>
                    <p>Status: {item.status}</p>
                    {item.genres.map(genres => (
                    <p key={genres.mal_id}>Genres: {genres.name}</p>
                     ))}
                    </div>
                    <div className="desc2">
                    <p>Score: {item.score}</p>
                    <p>Rating: {item.rating}</p>
                    <p>Duration: {item.duration}</p>
                    <p>{item.source}</p>
                    <p>{item.category}</p>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>    

            <div>
            </div>
            <div className="section2">
                <p>Bookmark</p>
                <p>Trailer</p> 
            </div>
            <hr className="hr"/>
        </section>
    </div>
}
export default Viewmore