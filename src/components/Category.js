import React, { useState } from "react";
/* import { Header } from './Header'
import { Header } from './Header' */
import "./AdmCategory.scss";

function CategoryPage({ recovery }) {
  /* const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
          setCategories((cats) => [inputValue, ...cats]);
          setInputValue("");
        }
      };*/
  return (
    <>
      {recovery ? (
        <div className="divCategories">
          <h1>CATEGORY</h1>
          <button>
            {/*  <img src="https://i.ibb.co/pvDKWpc/150519-1.png" alt="150519-1" border="0" /> */}
            Back to categories list
          </button>
          <div className="categories">
            <input className="categoryName" type="text" defaultValue={recovery.name} >
              {/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}
            </input>
            <input className="categoryImage" type="text">
              {/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}
            </input>
            <input className="description" type="text"></input>
          </div>
          <div className="buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {" "}
              Save{" "}
            </button>
            <button> Delete </button>
          </div>
        </div>
      ) : (
        <div className="divCategories">
          <h1>CATEGORY</h1>
          <button>
            {/*  <img src="https://i.ibb.co/pvDKWpc/150519-1.png" alt="150519-1" border="0" /> */}
            Back to categories list
          </button>
          <div className="categories">
            <input className="categoryName" type="text">
              {/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}
            </input>
            <input className="categoryImage" type="text">
              {/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}
            </input>
            <input className="description" type="text"></input>
          </div>
          <div className="buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {" "}
              Save{" "}
            </button>
            <button> Delete </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CategoryPage;
