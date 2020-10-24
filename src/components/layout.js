/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./SideBar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
    </>
  )
}

export default Layout
