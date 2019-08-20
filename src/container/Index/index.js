import React, { useState } from 'react';
import { Navbar, Icon } from '../../components';
import { Home, BasketPage } from '..';
import { useLocalStorage } from '../../hooks';

import './index.css';

export default () => {

    const [basket, setBasket] = useLocalStorage('basket', { items: []});
    const [page, setPage] = useState('home');

    return (
        <div>
            <Navbar toIndexPage={()=>setPage('home')}>
                <button className="sb-de-navbar-button" onClick={()=>setPage('basket')}>
                    <Icon.ShoppingBasket />
                    {
                        basket.items.length > 0  && 
                        <div className="sb-de-navbar-shopping-badge">
                            {basket.items.length}
                        </div>
                    }
                </button>
            </Navbar>
            <div className="sb-de-content">
                {
                    page === 'home' && 
                    <Home 
                        addItemToBasket={(item)=>setBasket({...basket, items: basket.items.concat([item])})}
                        selectedItems={basket.items}
                    />
                }
                {page === 'basket' && <BasketPage basket={basket}/>}
            </div>
        </div>
    );
}