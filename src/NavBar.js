import React from 'react'
import Axios from 'axios'
import "./movies.css"

function NavBar(){
    return(
        <div class="NavBar">
            <nav class="navbar navbar-expand-lg navbar-light bg-black">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="myNavBar">
      <img src='https://i.pinimg.com/originals/08/68/dc/0868dcacc7c50ca2c7d35b27be81e5a9.png' className='mylogo'></img>
    </a>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id="myNavBar">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="myNavBar">TV Shows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="myNavBar" >Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="myNavBar" >News and Popular</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="myNavBar">My List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="myNavBar">Browse by Languages</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar;