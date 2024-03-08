import React, {useState, useEffect} from "react";
import CarProducts from "./carproducts";
const Home =  () => {
    const [carData, setCarData]= useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://listing.cardekho.com/api/v1/usedcar/tuc?&cityId=&connectoid=&sessionid=e3492af1830e040494d9e51866795763&lang_code=en&regionId=");
                
                const jsonData = await response.json();
                console.log("json Data",jsonData);
                console.log(jsonData?.data?.items);
                setCarData(jsonData?.data?.items);
                console.log(jsonData?.data?.items);

            } catch (error) {
                console.error("There was an error fetching the data:", error);
            }
        };

        fetchData();
    }, []);
    console.log("car data",carData);
    return (<div>
        <header className="App-header">
            <h1>My Car Shop</h1>
            <input type="text" placeholder="Search..." className="search-bar" />
        </header>
        <CarProducts props={carData}/>
    </div>)
}
export default Home;