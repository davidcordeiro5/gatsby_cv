import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./Menu.scss"

const Menu = () => {
  const data = useStaticQuery(graphql`
  query {
    site(siteMetadata: {title: {}}) {
      siteMetadata {
        title
        linksMenu {
          pathName
          linkName
        }
      }
    }
    image: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fixed(width: 80, height: 80, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
      name
    }

    icons: allFile(filter: {sourceInstanceName: {eq: "icons"}}) {
      nodes {
        name
        id
        childImageSharp {
          fixed(width: 25, height: 25, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }

  }
  `)


  const getSocialLink = (socialName) => {
    switch (socialName) {
      case "github":
        return "https://github.com/davidcordeiro5"
        break;
      case "linkedin":
        return "https://www.linkedin.com/in/david-cordeiro-7566a411b/"
        break;
      case "twitter":
        return "https://twitter.com/david_cdr5"
        break;
      default:
        return null
        break;
    }


  }


  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <menu className="menu" id="mySidenav">
      <span className="closebtn" onClick={closeNav}>&times;</span>
      <Link to="/">
        <Img
          fixed={data.image.childImageSharp.fixed}
          alt={data.image.name}
          style={{ margin: 25 }}
        />
      </Link>
      <h1 className="menu-tilte">{data.site.siteMetadata.title}</h1>
      {data.site.siteMetadata.linksMenu.map((link, idx) => {
        return <Link to={link.pathName} className="link-page" activeClassName="-active" key={link.pathName + idx}>{link.linkName}</Link>
      })}

      <ul className="social-ul">
        {
          data.icons.nodes.map((icon, idx) => {
            return (<a className="social-link"
              key={icon.name + idx}
              href={getSocialLink(icon.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fixed={icon.childImageSharp.fixed} alt={icon.name} />
            </a>)
          })
        }
      </ul>
    </menu>
  )
}

export default Menu
