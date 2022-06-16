import React from 'react'
import SearchBox from "../components/SearchBox/SearchBox";
import Box from "../components/Box/Box";
import "./Home.css"

const Home = () => {


  return (
      <div className="main">
          <SearchBox/>
          <Box/>
      </div>
  )
}

export default Home
