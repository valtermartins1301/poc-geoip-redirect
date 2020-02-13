import React from "react"
import { useTranslation } from 'react-i18next'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Layout  siteTitle={t('commons:headings.siteTitle')}>
      <SEO title="404: Not found" />
      <h1>{t('notFound:headings.title')}</h1>
      <p>{t('notFound:phrases.page_not_found')}</p>
    </Layout>
  )
}

export default NotFoundPage
