import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../components/Title/Title"
import Hobbies from "../components/Hobbies/Hobbies"

import "./index.scss"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    about: site {
      siteMetadata {
        title
        job
        description
        author
        hobbysData {
          title
        }
      }
    }
    image: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    icons: allFile(filter: {sourceInstanceName: {eq: "hobbiesIcons"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            fixed(width: 25, height: 25, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }`)

  return (
    <Layout>
      <SEO title="A propos" />
      <section className="about -head">
        <div className="img-container">
          <Img fluid={data.image.childImageSharp.fluid} alt={data.image.name} 
          style={{height: '100%'}}/>
        </div>
        <section className="about-me">
          <p className="about-job">{data.about.siteMetadata.job}</p>
          <h2 className="about-title">{data.about.siteMetadata.title}</h2>
          <p className="about-description">{data.about.siteMetadata.description}</p>
        </section>
      </section>
      <section className="about -hobby">
        <Title underline>{data.about.siteMetadata.hobbysData.title}</Title>
        <Hobbies/>
      </section>
    </Layout>
  )
}

export default IndexPage
