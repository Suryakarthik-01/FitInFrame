import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    // Only close the search when navigating to a different page
    setShowSearch(false);
  }, [location.pathname, setShowSearch])

  return showSearch ? (
    <div className="bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-3 my-5 mx-3 rounded-full w-[700px]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-base w-full"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;