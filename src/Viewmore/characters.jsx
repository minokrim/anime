import React ,{useState,useEffect}from "react"
function Characters(topAnime){
    const [characters,setCharacters]=useState([])
    const GetCharacters = async () => {
    const temp = await fetch("https://api.jikan.moe/v4/anime/10/characters")
    .then(res => res.json());
    setCharacters(temp.data);
    };

useEffect(() => {
    GetCharacters()
    },[]);

    return <div>
        <section>
            {characters.map(char=>(
                <div key={char.id}>
                    {characters.character}
                </div>
            ))}
        </section>
    </div>
}
export default Characters



