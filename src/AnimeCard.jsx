function AnimeCard({anime}){
    return (
        <>
       <img src={anime.images?.jpg?.image_url} alt="" />
        </>
    )
}

export default AnimeCard;