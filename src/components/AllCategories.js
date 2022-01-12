import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
} from "../Styles.js/search";
import add from "../assets/add.png";
import edit from "../assets/edit.png";
import trash from "../assets/trash.png";
import { useCategory } from "../hooks/useCategory";
import { Card } from "@mui/material";

function AllCategories() {
  const { category } = useCategory();
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
        {category &&
          category.map((card) => (
            <div key={card.id} className="Card">
                <img src={card.url} alt="img-Category" className="img-card" />
              <>
                <img src={edit} alt="logo-img" className="edit" />
                <img src={trash} alt="logo-img" className="delete" />
              </>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AllCategories;
