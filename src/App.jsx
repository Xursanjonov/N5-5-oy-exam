import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'

// import Components
import Layout from './layout'
import Home from './pages/home'
import Login from './pages/login'
import Auth from './pages/auth'
import Admin from './pages/admin'
import NotFound from './pages/not-found'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route index element={<Login />} />
        </Route>

        <Route path='/' element={<Auth />} >
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default memo(App)