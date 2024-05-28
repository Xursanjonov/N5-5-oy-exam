import React, { memo } from 'react'
import HomeFeaturedTab from './components/HomeFeaturedTab'
import { featuredTabs } from '../../static'

// import styles
import './home.scss'
import HomeHeroSlider from './components/HomeHeroSlider'

const Home = () => {
    return (
        <section className='home container'>
            <HomeHeroSlider />
            <section className='featured'>
                <div className="featured__title">
                    <h1 className='featured__titles'>Featured Categories</h1>
                    <ul className="featured_categories-tab">
                        <li>Cake & Milk</li>
                        <li>Coffes & Teas</li>
                        <li className='featured-foods'>Pet Foods</li>
                        <li>Vegetables</li>
                    </ul>
                </div>
                <div className="featured__products container">
                    {
                        featuredTabs?.map(el => (
                            console.log(`${el.title} => ${el.color}`),
                            <HomeFeaturedTab key={el.id}>
                                <div className="HomeFeaturedTab" style={{ backgroundColor: `${el.color}` }}>
                                    <figure> <img src={el.img} alt="" /> </figure>
                                    <h5>{el.title}</h5>
                                    <p>{el.items} items</p>
                                </div>
                            </HomeFeaturedTab>
                        ))
                    }
                </div>
            </section>
        </section>
    )
}

export default memo(Home)