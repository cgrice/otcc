import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

import robotLeft from '../img/robotLeft.png'
import robotRight from '../img/robotRight.png'
import ctaHoverBig from '../img/ctaHoverBig.png'
import ctaHoverMobile from '../img/ctaHoverMobile.png'

export const IndexPageTemplate = ({
  main,
  thisweek,
}) => (
  <div>
    <section className="main">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="content">
              <h2>{main.heading}</h2>
              <ReactMarkdown source={main.description} />
            </div>
          </div>
          <div className="column">
            <div className="content aside">
              <h2>{thisweek.title}</h2>
              <ReactMarkdown source={thisweek.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="secondary">
      <div className="container">
        <h2>Latest from Code Club</h2>
        <BlogRoll />
        <p><Link to="/blog" >More from the blog...</Link></p>
      </div>
    </section>
    <section className="cta">
      <div className="container">
        <img className="robot robot-left" src={robotLeft} />
        <img className="robot robot-right" src={robotRight} />
        
        <Link to="/get-involved" className="button">
          <img className="ctaHover" src={ctaHoverBig} />
          <img className="ctaHoverMobile" src={ctaHoverMobile} />
          Get Involved!
        </Link>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  thisweek: PropTypes.object,
  main: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        main={frontmatter.main}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        thisweek={frontmatter.thisweek}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        thisweek {
          title
          description
        }
        main {
          heading
          description
        }
      }
    }
  }
`
