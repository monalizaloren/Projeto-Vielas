/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/searchComponent.css';
import { Link } from 'react-router-dom';

const SearchComponent = () => {
  return (

    <div className="Container">

      <div className="area-input">
        <span className='icon'> <FontAwesomeIcon icon={faSearch} /> </span>
        <input  type="text" placeholder='BUSCA' autoFocus className='input'/>
      </div>

      <div className='areaLinks'>
        <ul>
            <li><a href="#">#Paraísopolis</a></li>
          
            <li><a href="#"> #Saúde </a></li> 
          
            <li><a href="#"> #Hospitais </a></li>
          
            <li><a href="#"> #Coperifa </a></li> 
          
            <li><a href="#"> #CasaDeCultura </a></li> 
          
            <li><a href="#"> #Eleições2022 </a></li>
          
            <li><a href="#"> #Urnas </a></li>
        </ul>
      </div>

    </div>
  )
}

export default SearchComponent; 
