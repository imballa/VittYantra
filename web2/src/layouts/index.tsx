 import * as React from "react"
 import Helmet from 'react-helmet'
 import Header from '../components/Header'
 import Footer from '../components/Footer'
 
 const IndexLayout: React.FC = ({ children }) => {
    return (
      <div>
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
        </Helmet>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
  
  export default IndexLayout
 