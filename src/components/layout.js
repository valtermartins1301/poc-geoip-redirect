import React from "react"
import PropTypes from "prop-types"
import i18n from '../i18n'
import { useTranslation, I18nextProvider } from "react-i18next"

import Header from "./header"
import "./layout.css"

const Layout = ({ siteTitle, children }) => {
  const {t} = useTranslation()

  return (
    <I18nextProvider i18n={i18n}>
      <Header siteTitle={siteTitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, {t('commons:phrases.copyright')}
        </footer>
      </div>
    </I18nextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
