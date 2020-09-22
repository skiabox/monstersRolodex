import React from "react";

import "./search-box.styles.css";

//name the function props with handle.... something
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
