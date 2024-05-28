import React, { Fragment, memo } from 'react'
import { Outlet } from 'react-router-dom'

// import Components
import Header from './header'
import Footer from './footer'

// import styles
// import './layout.scss'

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <main className="container"> <Outlet /> </main>
            <Footer />
        </Fragment>
    )
}

export default memo(Layout)