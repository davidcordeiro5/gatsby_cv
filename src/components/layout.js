/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Menu from "../components/Menu/Menu"
import NavBar from "../components/NavBar/NavBar"
import { Link } from "gatsby"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className="app" >
        <NavBar />
        <Menu />
        <main className="main">{children}</main>
      </div>
      <footer className="footer-app">
          <Link to="/">About</Link>
          <Link to="resume">Resume</Link>
          <Link to="contact">Contact</Link>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
