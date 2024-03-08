import React from 'react';
import './CarProducts.css'; // Importing the CSS file for styling
import Card from './card';

const CarProducts = (props) => {
    console.log("props is", props);
    const oneToFive = props?.props?.tabs?.["0"]?.items;
    console.log("one to five ", props?.props?.tabs?.["0"]?.items);
    const tenToFiften =  props?.props?.tabs?.["2"]?.items;
    console.log("five to ten ", tenToFiften);

    const fiveToTen = props?.props?.tabs?.["1"]?.items;


    return (
        <div className="car-products-container">
            <h2>Explore Our Collections</h2>
            <div className="car-category">
                <h3>5-10 Lakh Cars</h3>
                <div className="car-listings">
                    {oneToFive && oneToFive.map((element, i) => (

                        <Card car={element} />


                    ))}
                </div>



            </div>
            <div className="car-category">
                <h3>5-10 Lakh Cars</h3>
                <div className="car-listings">
                    <div className="car-listings">
                        {fiveToTen && fiveToTen.map((element, i) => (

                            <Card car={element} />


                        ))}
                    </div>
                </div>
            </div>
            <div className="car-category">
                <h3>Over 20 Lakh Cars</h3>
                <div className="car-listings">
                    {/* Dynamic listing components go here */}
                    <div className="car-listings">
                        {tenToFiften && tenToFiften.map((element, i) => (

                            <Card car={element} />


                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarProducts;
