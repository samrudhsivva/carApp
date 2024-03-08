const Card = (props) => {
    console.log("hiiiiiiiiiiiiiiiiiiiiiiii");
    console.log("card props ", props);
    return (<div className="card-container">
        {/* Placeholder for car cards, you can map through your data and create cards dynamically */}
        <div className="card">
            <img src={props?.car?.image} alt="Car" />
            <h2><b>{props?.car?.car_name}</b></h2>
            <p><b>{props?.car?.car_price}</b></p>
            <b>{props?.car?.brand}</b>
        </div>
        {/* Repeat for other cars */}
    </div>)
}

export default Card;