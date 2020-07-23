import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./Hobbies.scss";

const Hobbies = () => {

  const data = useStaticQuery(graphql`
  query {
    hobbies: site {
      siteMetadata {
        hobbysData {
          title
          hobbies {
            description
            title
            iconName
          }
        }
      }
    }
    icons: allFile(filter: {sourceInstanceName: {eq: "hobbiesIcons"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            fixed(width: 40, height: 40, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }`)

  console.log('data', data)

  const getHobbiesWithImg = () => {
    let hobbies = []

    data.icons.edges.forEach((elem) => {
      data.hobbies.siteMetadata.hobbysData.hobbies.forEach((hobby) => {
        if (hobby.iconName === elem.node.name) {
          hobbies.push({
            title: hobby.title,
            desc: hobby.description,
            img: elem.node.childImageSharp.fixed
          })
        }
      })
    })

    return hobbies
  }

  return (
    <section className="hobbies">
      {
        getHobbiesWithImg().map((hobby, idx) => {
          console.log(hobby.img)
          return (
            <section className="hobby" key={hobby.title + idx}>
              <Img fixed={hobby.img} alt={hobby.title}/>
              <div className="hobby-text">
                <h4 className="hobby-title">{hobby.title}</h4>
                <p className="hobby-description">{hobby.desc}</p>
              </div>
              
            </section>)
        })
      }
    </section>
  )
}

export default Hobbies
