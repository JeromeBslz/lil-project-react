
function ClassCard ({name, text, image }){
    return(
        <div>
            <h2>{name}</h2>
            <p>{text}</p>
            <img src={image} />
        </div>

    )
}

export default ClassCard;