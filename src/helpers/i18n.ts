import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {
  // Lazy requires.
  es: () => require('../assets/translations/es.json'),

  // Add new translations here, for example:
  //en: () => require('./app/assets/translations/en.json'),
};

export const translate = memoize(
  (key: any, params?: Record<string, unknown>) => i18n.t(key, params),
  (key: string, config: any) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  // Fallback if no available language fits.
  const isRTL = false;
  const fallback = {languageTag: 'es', isRTL};

  const {languageTag} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // Update layout direction.
  I18nManager.forceRTL(isRTL);

  // Set i18n-js config.
  i18n.translations = {[languageTag]: translationGetters.es()};
  i18n.locale = languageTag;
};
