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

import AOS from 'aos'
import 'aos/dist/aos.css'


class IndexPageTemplate extends React.Component {

  componentDidMount() {
    AOS.init()
  }
  
  render() {
    const { main, thisweek} = this.props

    return (
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
            <BlogRoll/>
            <p><Link to="/blog" >More from the blog...</Link></p>
          </div>
        </section>
        <section className="cta">
          <div className="container">
            <img 
              className="robot robot-left" 
              data-aos-anchor=".cta" 
              data-aos="slide-up" 
              data-aos-duration="750"
              src={robotLeft} 
            />
            <img 
              className="robot robot-right" 
              data-aos-anchor=".cta" 
              data-aos-delay="500" 
              data-aos="slide-down" 
              data-aos-duration="750"
              src={robotRight} 
            />
            
            <Link to="/get-involved" className="button">
              <img className="ctaHover" src={ctaHoverBig} />
              <img className="ctaHoverMobile" src={ctaHoverMobile} />
              Get Involved!
            </Link>
          </div>
        </section>
      </div>
    )
  } 
  
}

IndexPageTemplate.propTypes = {
  thisweek: PropTypes.object,
  main: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  console.log(frontmatter)

  return (
    <Layout>
      <IndexPageTemplate
        main={frontmatter.main}
        thisweek={frontmatter.thisweek}
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
