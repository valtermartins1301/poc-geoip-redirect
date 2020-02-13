import React from "react"
import { Link } from "gatsby"
import { useTranslation } from 'react-i18next'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const { t } = useTranslation()
  
  return (
    <Layout siteTitle={t('commons:headings.siteTitle')}>
      <SEO title="Home" />
      <h1>{t('page1:headings.title')}</h1>
      <p>{t('page1:headings.subtitle')}</p>
      <p></p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">{t('page1:labels.goTo', { pageNumber: '2'})}</Link>
    </Layout>
  )
}
export default IndexPage
