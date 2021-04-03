import * as React from 'react'
import { Link, PageProps } from 'gatsby'

import IndexLayout from '../layouts'

const NotFound: React.FC<PageProps> = () => (
  <IndexLayout>
    <h1>404: Page not found.</h1>
    <p>
      You have hit the void. <Link to="/">Go back.</Link>
    </p>
  </IndexLayout>
)

export default NotFound