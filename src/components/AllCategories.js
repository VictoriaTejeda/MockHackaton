import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Search, StyledInputBase, SearchIconWrapper} from '../Styles.js/search'

function AllCategories() {
    return (
        <div>
             <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search products"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
        </div>
    )
}

export default AllCategories
