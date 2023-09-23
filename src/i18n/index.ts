import { createI18n } from 'vue-i18n';
import { en } from './en';
import { it } from './it';

export const i18n = createI18n({
    legacy: false,
    availableLocales: ['it', 'en'],
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        it,
    },
    missingWarn: false,
    fallbackWarn: false,
});
