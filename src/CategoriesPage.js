import React from 'react'
import add from './assets/add.png'
import edit from './assets/edit.png'
import trash from './assets/trash.png'

export const CategoriesPage = () => {
    return (
        <div>
            <img src={add} alt="logo-img" className="add" />
            <button className='add-category'> Add new category</button>
            <div className='Card'>
            <img src={edit} alt="logo-img" className="edit" />
            <img src={trash} alt="logo-img" className="delete" /> 
            </div>

        </div>
    )
}

