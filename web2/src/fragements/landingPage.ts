import { graphql } from 'gatsby'

export const query = graphql`
  fragment LandingPageFieldsFull on SanityLandingPage {
    id
    name
    headline
    slug {
      current
    }
    path
    sections: _rawPageSections(resolveReferences: {maxDepth: 10})
  }
`