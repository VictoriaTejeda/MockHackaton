import React, { useState } from "react";
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
import CategoryPage from "./Category";

function AllCategories() {
  const { category } = useCategory();
  const [recovery, setRecovery] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
  });
  const [conditionalRender, setConditionalRender] = useState(true);

  return (
    <>
      {conditionalRender ? (
        <>
          {" "}
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
                    <img
                      src={card.url}
                      alt="img-Category"
                      className="img-card"
                    />
                    <p>{card.name}</p>
                    <img
                      src={edit}
                      alt="logo-img"
                      className="edit"
                      onClick={(e) => {
                        e.preventDefault();
                        setConditionalRender(false);
                        setRecovery({
                          id: card.id,
                          name: card.name,
                          description: card.description,
                          url: card.url,
                        });
                      }}
                    />
                    <img src={trash} alt="logo-img" className="delete" />
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (
        <CategoryPage recovery={recovery} />
      )}
    </>
  );
}

export default AllCategories;
/*

<>    <div>
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
                <p>{card.name}</p>
                <img
                  src={edit}
                  alt="logo-img"
                  className="edit"
                  onClick={(e) => {
                    e.preventDefault();
                    setRecovery(card.name);
                  }}
                />
                <img src={trash} alt="logo-img" className="delete" />
              </div>
            ))}
        </div>
      </div>
    </>*/
