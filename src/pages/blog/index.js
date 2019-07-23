import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

class BlogPageTemplate extends React.Component {
  render() {
    console.log(this.props)
    const { posts } = this.props
    return (
      <div>
        <section className="secondary">
          <div className="container">
            <h2>Latest Posts</h2>
          </div>
        </section>
        <section>
          <div className="container">
            {posts.map(post => (
              <div className="content">
                <Link to={post.fields.slug}><h2>{post.frontmatter.title}</h2></Link>
                <h4>{post.frontmatter.date}</h4>
                <p>{post.excerpt}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
        
    )
  }
}

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node)
  return (
    <Layout>
      <BlogPageTemplate
        posts={posts}
      />
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`


