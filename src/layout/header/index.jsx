import React, { Fragment, memo } from 'react'
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { RxDashboard, RxUpdate } from "react-icons/rx";
// import components
import Logo from '../../assets/icons/Logo'
import Support from '../../assets/icons/Support'

import dealsIcon from '../../assets/icons/deals-icon.png'

// import styles
import './header.scss'

const Header = () => {
    return (
        <Fragment>
            <div className="header__top">
                <div className='header__top__div1'>
                    <p>About Us <span>|</span> </p>
                    <p>My Account <span>|</span> </p>
                    <p>Wishlist <span>|</span> </p>
                    <p>Order Tracking</p>
                </div>
                <div className='header__top__div2'>
                    <p className='header__top_div2__p'>Need help? Call Us: <span className="lime"> + 1800 900 </span></p>
                    <span>|</span>
                    <select className='header__selected'>
                        <option value="eng">English</option>
                        <option value="rus">Rus</option>
                        <option value="uzb">Uzbek</option>
                    </select>
                    <span>|</span>
                    <select className='header__selected_valyuta'>
                        <option value="usd">USD</option>
                        <option value="rub">RUB</option>
                        <option value="uzs">UZS</option>
                    </select>
                </div>
            </div>
            <header className='header__bottom'>
                <div className="header__bottom__navbar container">
                    <Link to='/'> <Logo /> </Link>
                    <div className="header-input">
                        <select> <option value="all">All Categories</option> </select>
                        <span>|</span>
                        <div className="header-input1">
                            <input type="search" placeholder='Search for items...' />
                            <FaSearch fontSize={20} color='gray' />
                        </div>
                    </div>
                    <div className="location">
                        <CiLocationOn fontSize={20} color='gray' />
                        <select> <option value="your"> Your Location </option> </select>
                    </div>
                    <div className="navbar-icons">
                        <Link> <span><RxUpdate fontSize={21} color='black' /></span> Compare</Link>
                        <Link> <span><FaHeart fontSize={20} color='black' /></span> Wishlist</Link>
                        <Link> <span><FaShoppingCart fontSize={20} color='black' /></span> Cart</Link>
                        <Link> <span><FaUser fontSize={20} color='black' /></span> Account</Link>
                    </div>
                </div>
                <hr style={{marginTop:'8px'}} />
                <nav className='header-nav'>
                    <div className="navbar-left">
                        <div className="browse">
                            <RxDashboard />
                            <section className='alls' value='alls'> <option value="alls">Browse All Categories</option> </section>
                        </div>
                        <div className="navbar-tabs">
                            <p className='deals'> <img src={dealsIcon} alt="Deals icon" /> Deals</p>
                            <select className='home-select'> <option>Home</option> </select>
                            <p>About</p>
                            <select> <option>Shop</option> </select>
                            <select> <option>Vendors</option> </select>
                            <select> <option>Mega menu</option> </select>
                            <select> <option>Blog</option> </select>
                            <select> <option>Pages</option> </select>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className="support-center">
                        <Support />
                        <h5>1900 - 888 <span>24/7 Support Center</span> </h5>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
}

export default memo(Header)