import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
} from "../Styles.js/search";
import add from '../assets/add.png'
import edit from '../assets/edit.png'
import trash from '../assets/trash.png'


function AllCategories() {
  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search products"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <div>
        <img src={add} alt="logo-img" className="add" />
        <button className="add-category"> Add new category</button>
        <div className="Card">
          <img src={edit} alt="logo-img" className="edit" />
          <img src={trash} alt="logo-img" className="delete" />
        </div>
      </div>
    </div>
  );
}

export default AllCategories;
