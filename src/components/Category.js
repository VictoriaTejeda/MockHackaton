import React, { useState } from "react";
/* import { Header } from './Header'
import { Header } from './Header' */
import "./AdmCategory.scss";

function CategoryPage({ recovery, defaultData, editUser }) {

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
            <input
              className="categoryName"
              name="name"
              type="text"
              defaultValue={recovery.name}
              onChange={(e)=>defaultData(e)}
            >
              {/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}
            </input>
            <input name="url" className="categoryImage" type="text" defaultValue={recovery.url}
              onChange={defaultData}>
              {/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}
            </input>
            <input name="description" className="description" type="text" defaultValue={recovery.description}
              onChange={defaultData}></input>
          </div>
          <div className="buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
                editUser(recovery.id);
                window.location.href = "./allCategories"
              }}
            >
              Save
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
            <input
              className="categoryName"
              type="text"
            >
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
              Save
            </button>
            <button> Delete </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CategoryPage;
