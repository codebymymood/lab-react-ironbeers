import React from "react";
import {useState, useEffect} from "react";

import axios from 'axios';


function RandomBeer(props) {

    let [beerDetails, setBeer] = useState(null)

    useEffect(() => {
        
        const fetchData = async () => {
           let response  = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
           setBeer(response.data)
        //    console.log(response.data)  
           
       }
       fetchData()
       
   }, [])

        if(!beerDetails){
            return <h1>loading...</h1>
        }

    
    return (
        <div>
            <img src={beerDetails.image_url} alt="img" height="300px"></img>
            <h1>{beerDetails.name}</h1>
            <h3>First brewed:{beerDetails.first_brewed}</h3>
            <h3>Tagline:{beerDetails.tagline}</h3>
            <h3>Attenutation level:{beerDetails.attenuation_level}</h3>
            <p>{beerDetails.description}</p>
            <h6>Contributed by:{beerDetails.contributed_by}</h6>
        </div>
    )
}


export default RandomBeer
