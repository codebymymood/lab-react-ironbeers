import React from 'react';
import { Routes, Route } from  "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Beers from './components/Beers';
import axios from 'axios';
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  
// -------states--------//
const [beers, setBeers] = useState([])
const navigate = useNavigate()
const [beersCopy, setBeersCopy] = useState([])
//---------------//

  
    useEffect(() => {

      const fetchData = async () => {
        let response  = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        setBeers(response.data)
        setBeersCopy(response.data)
    }
    fetchData()

    }, [])

    useEffect(() => {
      navigate('/')
    }, [beers])

    const handleSubmit = async (event) => {
      event.preventDefault()
      let newBeer = {
        name: event.target.name.value,
        tagline: event.target.tagline.value,
        description: event.target.description.value,
        first_brewed: event.target.first_brewed.value,
        brewers_tips: event.target.brewers_tips.value,
        attenuation_level: event.target.attenuation_level.value,
        contributed_by: event.target.contributed_by.value
      }
      let response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      setBeers([response.data, ...beers])
      setBeersCopy([response.data, ...beers])
  
    }

    function handleSearch(event){
      let theBeer = event.target.value
      let filteredBeers = beers.filter((beer) => {
        return beer.name.toLowerCase().includes(theBeer.toLowerCase())
      })      
     
      setBeersCopy(filteredBeers)
    }
    


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers beers={beersCopy} btnSearch={handleSearch}/>} />
        <Route path="/beers/:beerId" element={<BeerDetails/>} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer btnSubmit={handleSubmit}/>} />
    </Routes>
    </div>
  );
}

export default App;
