import React from "react"
import { useTranslation } from 'i18next'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const t = useTranslation()

  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>{t('not-found:headings.title')}</h1>
      <p>{t('not-found:phrases.page_not_found')}</p>
    </Layout>
  )
}

export default NotFoundPage
