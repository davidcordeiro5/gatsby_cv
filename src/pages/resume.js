import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import './resume.scss'

import Header from "../components/Header/Header"
import Title from "../components/Title/Title"

/**
 * for skill
 * blue : 55acee
 * <svg height="25" width="25">
      <path d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z" fill={i} />    </svg>
 */

const StarsColors = (lvl) => {
  let colors = []
  for (var i = 0; i < 10; i++) {
    i < lvl ? colors.push("#55acee") : colors.push("#cecece")
  }
  return colors
}

const Resume = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        resumeData {
          education {
            description
            what
            year
            job
          }
          exprerience {
            description
            job
            techno
            what
            year
          }
          qualities
          skills {
            language {
              level
              name
            }
          }
          title
          subtitle
        }
      }
    }
  }
  `)

  console.log('data', data.site.siteMetadata.resumeData.skills)
  return (
    <Layout>
      <SEO title="Parcours" />
      <Header title={data.site.siteMetadata.resumeData.title} subtitle={data.site.siteMetadata.resumeData.subtitle} />
      <section className="resume">
        <section className="education">
          <Title underline>Formations</Title>
          <div className="items-container">
            {
              data.site.siteMetadata.resumeData.education.map((item, idx) => {
                return (
                  <div className="item" key={item.year + idx}>
                    <div className="left-part">
                      <h5 className="item-year">{item.year}</h5>
                      <span className="item-what">{item.what}</span>
                    </div>
                    <div className="sep" />
                    <div className="right-part">
                      <h4 className="item-job">{item.job}</h4>
                      <p className="item-desc">{item.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <Title underline>Expériences</Title>
          <div className="items-container">
            {
              data.site.siteMetadata.resumeData.exprerience.map((item, idx) => {
                return (
                  <div className="item">
                    <div className="left-part">
                      <h5 className="item-year">{item.year}</h5>
                      <span className="item-what">{item.what}</span>
                    </div>
                    <div className="sep" />
                    <div className="right-part">
                      <h4 className="item-job">{item.job}</h4>
                      {item.techno && <p className="item-techno">{item.techno}</p>}
                      <p className="item-desc">{item.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className="skills">
          <aside className="aside-skills">
            <Title underline>Compétence</Title>
            {
              data.site.siteMetadata.resumeData.skills.language.map((skill, idx) => {
                return (<div>
                  <h6 className="skill-name">{skill.name}</h6>
                  <div className="skill-stars" style={{marginBottom: 5}}>
                    {
                      StarsColors(skill.level).map((color, idx) => {
                        return (
                          <svg height="25" width="25" key={idx+color}>
                            <path d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z" fill={color} />
                          </svg>
                        )
                      })
                    }
                  </div>
                </div>)
              })
            }
          </aside>
        </section>
      </section>
    </Layout>
  )
}

export default Resume
