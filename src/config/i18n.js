import Vue from 'vue';
import VueI18n from 'vue-i18n';
import es from '@/locales/es';

Vue.use(VueI18n);

const messages = {
  es
};

const locale = document.querySelector('html').getAttribute('lang') || 'es';

export default new VueI18n({
  locale,
  messages,
  fallbackLocale: locale
});
