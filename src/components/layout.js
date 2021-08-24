import * as React from "react"
import { Link } from "gatsby"
// import akLogo from "../images/ak-gastby-logo.png"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
      <Link to="/"><StaticImage
        src="../images/ak-logo-gatsby.svg"
        quality={100}
        alt="Logo"
      /></Link>
    </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div>
      <header className="global-header">
      <h1 className="main-heading">
      <Link to="/"><StaticImage
        src="../images/ak-logo-gatsby.svg"
        quality={100}
        alt="Logo"
      /></Link>
    </h1></header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main>{children}</main>
      </div>
      <footer className="site-footer">
        © {new Date().getFullYear()}, Built by Anshul using
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
