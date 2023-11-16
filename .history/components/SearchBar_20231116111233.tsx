"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({otherClasses}:{otherClasses:string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
    src=""/>
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
        <SearchButton otherClasses ="sm:hidden"/>
       </div>
    </form>
  )
}

export default SearchBar