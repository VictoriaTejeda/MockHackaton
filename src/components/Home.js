import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Search, StyledInputBase, SearchIconWrapper} from '../Styles.js/search'
import promo1 from '../img/Promo-1.gif'
import promo2 from '../img/Promo-2.gif'

function Home() {
    return (
        <>
            <section>
                <p>
                    <img src='https://i.ibb.co/86rC1ds/right-arrow-3-2x.png' alt='arrow' />
                    See all promotions
                </p>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search products"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </section>
            <section className='promos'>
                <img src={promo1} alt='promo1'/>
                <img src={promo2} alt='promo2'/>
            </section>
            <p>
                <img src='https://i.ibb.co/86rC1ds/right-arrow-3-2x.png' alt='arrow' />
                See all categoryes
            </p>
            <section clasName='categorys'>
                <img src='https://i.ibb.co/dPRWyNJ/MEN2.png' alt='category'/>
                <img src='https://i.ibb.co/ccvVnxZ/SHOES.png' alt='category'/>
                <img src='https://i.ibb.co/VMjXrjP/WOMAN-2.png' alt='category'/>
            </section>
        </>
    )
}

export default Home
