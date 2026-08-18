import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/footer'
import NavBar from '../Navbar/NavBar'

export default function Layout() {
  return <>
<NavBar/>
    <Outlet></Outlet>
  <Footer/>

</>
}
