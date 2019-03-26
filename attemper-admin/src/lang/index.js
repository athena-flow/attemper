import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import { getLocale } from 'vue-cron-generator/src/util/tools'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import elementEsLocale from 'element-ui/lib/locale/lang/es'// element-ui lang
import cronEnLocale from 'vue-cron-generator/src/locale/en'
import cronZhLocale from 'vue-cron-generator/src/locale/zh-CN'
import enLocale from './en'
import zhLocale from './zh'
import esLocale from './es'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
    ...cronEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
    ...cronZhLocale
  },
  es: {
    ...esLocale,
    ...elementEsLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: Cookies.get('language') || getLocale().split('_')[0] || 'en',
  // set locale messages
  messages
})

export default i18n