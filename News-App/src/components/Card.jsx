function Card({title,url,image}){
    
    return (
        <div  className="card">
            <img src={image}/>
            <h2 className="title">{title}</h2>
            <a href={url} target="_blank">Read In Detail</a>
            {/* <h3 className="url">{url}</h3> */}
        </div>
    )
}
export default Card;