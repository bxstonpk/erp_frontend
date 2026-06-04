import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/components/ui/Button'
import type { SupportedLanguage } from '@/shared/i18n/config'

export function HomePage() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const next: SupportedLanguage = i18n.language.startsWith('th') ? 'en' : 'th'
    void i18n.changeLanguage(next)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold text-gray-900">{t('home.title')}</h1>
      <p className="text-gray-600">{t('home.subtitle')}</p>
      <Button variant="secondary" size="sm" onClick={toggleLanguage}>
        {t('common.language')}: {i18n.language.toUpperCase()}
      </Button>
    </main>
  )
}
