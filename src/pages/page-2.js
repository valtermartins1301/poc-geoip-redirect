import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const { t } = useTranslation()

  return (
    <Layout siteTitle={t('commons:headings.siteTitle')}>
      <SEO title="Page two" />
      <h1>{t('page2:headings.title')}</h1>
      <p>{t('page2:headings.subtitle')}</p>
      <Link to="/">{t('page2:labels.navigate')}</Link>
    </Layout>
  )
}

export default SecondPage
