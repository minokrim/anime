import React from "react";
import './Home.css';
import MyCarousel from "../Carousel/Carousel";
function Home({ topAnime }) {
  if (!topAnime || !Array.isArray(topAnime) || topAnime.length === 0) {
    return <p>No anime data available</p>;
  }
    return (
      <div>
       <MyCarousel/>
        <div className="container-fluid d-flex align-items-center">
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 d-flex justify-content-center ">
          {topAnime.map((anime) => (
            <div className="col p-0 m-2 border border-custom darken-on-hover" key={anime.mal_id} >
              <div className=" mt-0 ms-0  me-0 img-fluid d-flex justify-content-center align-content-center m-2  ">
              <img className="w-100 border rounded rounded-20 " src={anime.images.jpg.large_image_url} alt="" />
              </div>
              <div className=" ">
                <p className="text-center text-white ">{anime.title}</p>
                <p className="text-center text-white">{anime.type}{' '}{anime.aired.prop.from.year}</p>
               
               
              </div>
             
              {/* Add other anime properties you want to display */}
            </div>
          ))}
            </div>
        </div>
      </div>
    );
  }

export default Home;
