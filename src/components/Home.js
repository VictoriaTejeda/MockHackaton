import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
} from "../Styles.js/search";
import promo1 from "../img/Promo-1.gif";
import promo2 from "../img/Promo-2.gif";

function Home() {
  return (
    <div className="home-container">
      <section className="items-container">
        <section className="arrow-container">
          <img
            src="https://i.ibb.co/86rC1ds/right-arrow-3-2x.png"
            alt="arrow"
          />
          <span> See all promotions</span>
        </section>
        <section className="search">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </section>
      </section>

            <section className='promos'>
                <section>
                <img src={promo1} alt='promo1' id='promo1' />
                <img src={promo2} alt='promo2' id='promo2' />
                </section>
            </section>
            <section className='see-categories'>
            <section className='link-categories'>
                <img src='https://i.ibb.co/86rC1ds/right-arrow-3-2x.png' alt='arrow' />
                <span>See all categories</span>
            </section>
            </section>
            
            <section className='categories-container'>
                <section>
                <img src='https://i.ibb.co/dPRWyNJ/MEN2.png' alt='category'/>
                <img src='https://i.ibb.co/ccvVnxZ/SHOES.png' alt='category'/>
                <img src='https://i.ibb.co/VMjXrjP/WOMAN-2.png' alt='category'/>
                </section>
            </section>
        </div>
    )
}

export default Home;
