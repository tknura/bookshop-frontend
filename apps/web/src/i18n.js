import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { pl, en } from 'i18n/index'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl,
      en,
    },
    lng: 'pl',
    fallbackLng: 'pl',

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
