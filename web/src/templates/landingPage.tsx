import React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import SectionRenderer from '../components/SectionRenderer'

const LandingPageTemplate = (props: any) => {
  const { data } = props
  const page = data && data.page

  return (<IndexLayout>
    {page?.sections.map((section: any) => <SectionRenderer {...section} key={section} />)}
  </IndexLayout>)
}
export const query = graphql`
  query LandingPageTemplateQuery($id: String!) {
    page: sanityLandingPage(id: { eq: $id }) {
      ...LandingPageFieldsFull
    }
  }
`
export default LandingPageTemplate