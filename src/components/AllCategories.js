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
import CategoryPage from "./Category";


function AllCategories() {
  function admCategory(e) {
    e.preventDefault();
    window.location.href = "./category";
  }

  const {recoverDataFn, category, conditionalRender, recovery, defaultData, changeCondition, editUser } = useCategory();
  
  
  return (
    <>
      {conditionalRender ? (
        <>
          <div>
          <button className="add-category" onClick={admCategory}>
              <img src={add} alt="logo-img" className="add" /> Add new category</button>
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
                        changeCondition()
                        recoverDataFn(card.id, card.name, card.description, card.url)

                      }}
                      
                    />
                    <img src={trash} alt="logo-img" className="delete" />
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (
        <CategoryPage recovery={recovery} defaultData={defaultData} editUser={editUser} />
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
