"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchButton = () => (
  <button> 

  </button>
)
const SearchBar = () => {
    const [manufacturer, setManufacturer]=
    useState('');
    const handleSearch = () =>{}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
       <div className="searchbar__item">
        <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        />
        <SearchButton/>
       </div>
    </form>
  )
}

export default SearchBar