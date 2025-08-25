import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Shared/Navbar/Navbar'

export default function MainLayout() {
  return (
      <>
          <Navbar/>
        <Outlet/>
      </>
  )
}
