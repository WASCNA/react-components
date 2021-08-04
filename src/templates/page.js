import React from "react";
import { graphql } from "gatsby";
import Banner from "../components/Banner"

const Page = ({ data }) => {
  const info = data.markdownRemark
  const title = info.frontmatter.title
  return (
    <main className="page">
      <Banner title={title} /> 
      <div dangerouslySetInnerHTML={{ __html: info.html }} className="page-content">
      </div>
    </main>
  )
};

export default Page;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
