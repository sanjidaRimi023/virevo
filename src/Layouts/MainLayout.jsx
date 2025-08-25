import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Shared/Navbar/Navbar'
import Footer from '../Components/Shared/Footer/Footer'

export default function MainLayout() {
  return (
      <>
          <Navbar/>
      <Outlet />
      <Footer/>
      </>
  )
}
