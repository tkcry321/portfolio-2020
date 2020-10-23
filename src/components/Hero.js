import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "desk-computer-.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <BackgroundImage Tag="section" className="background-hero" fluid={fluid}>
        <div className="section-center hero-center">
          <article className="hero-info">
            <div>
              <h1>I'm Albert</h1>
              <h4>software developer</h4>
              <Link to="/contact" className="btn">
                contact me
              </Link>
              <SocialLinks />
            </div>
          </article>
        </div>
      </BackgroundImage>
    </header>
  )
}

export default Hero
