import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./NavBar.scss"

const NavBar = () => {
  const data = useStaticQuery(graphql`
  query {
    site(siteMetadata: {title: {}}) {
      siteMetadata {
        title
      }
    }
    imageMenu: file(relativePath: {eq: "menu.png"}) {
      name
      childImageSharp {
        fixed(width: 21, height: 21, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    profilePic: file(relativePath: {eq: "me.jpg"}) {
      name
      childImageSharp {
        fixed(width: 35, height: 35, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`)

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "180px";
  }

  return (
    <nav className="nav-bar">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Img fixed={data.profilePic.childImageSharp.fixed} alt={data.profilePic.name} style={{ margin: "0 15px" }} />
        <h1 className="nav-bar-title">{data.site.siteMetadata.title}</h1>
      </div>
      <button className="nav-button" onClick={openNav} style={{ margin: "0 20px" }}>
        <Img fixed={data.imageMenu.childImageSharp.fixed} alt={data.imageMenu.name}/>
      </button>
    </nav>
  )
}

export default NavBar
