import React from 'react'
/* import { Header } from './Header'
import { Header } from './Header' */
import "./index.scss"

function Category() {
    return (
        <>
    {/*     <Header /> */}
        <div className = 'divCategories' >
            <h1>CATEGORY</h1>
            <button>{/*  <img src="https://i.ibb.co/pvDKWpc/150519-1.png" alt="150519-1" border="0" /> */}Back to categories list</button>
            <div className ="categories">
                <input className ="categoryName" type="text">{/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}</input>
                <input className ="categoryImage"type ="text">{/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}</input>
                <input className ="description" type ="text"></input>
            </div>
            <div className='buttons'>
            <button> Save </button>
            <button> Delete </button>
            </div>
       {/*  <Footer />   */}
        </div>
        </>
    )
}

export default Category
