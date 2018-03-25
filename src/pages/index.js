import React from 'react'
import Link from 'gatsby-link'

//giv: the following creates style used below
const liStyle = {
  display: 'block'
}
const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      {posts.map(({node: post}) => {
        const { frontmatter } = post

        return (
          <div>
            {/*giv: added date here instead of line 25 below*/}
            <p>{frontmatter.date}
            <h2>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h2></p>
            {/* //giv:
              <p>{frontmatter.date}</p>
              <p>{frontmatter.excerpt}</p>
            <ul>
              {post.frontmatter.tags.map(tag => {
                return (
                  <li>
                    <Link to={`/tags/${tag}`}>
                      {tag}
                    </Link>
                  </li>
                )
              })}
            </ul>
            */}
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
