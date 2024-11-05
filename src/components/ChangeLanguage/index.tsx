import type { StackParameters, ButtonParameters } from 'src/models';

import { useTranslation } from 'react-i18next';

import { Stack, Button } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';

export default function ChangeLanguage() {
  const { t, i18n } = useTranslation('common');

  const defaultProps = {
    variant: 'contained',
    startIcon: <FlagIcon />,
  } as ButtonParameters;

  const languageEnglishProps = {
    ...defaultProps,
    disabled: i18n.language === 'en',
    onClick: () => i18n.changeLanguage('en'),
  } as ButtonParameters;

  const languagePortugueseProps = {
    ...defaultProps,
    disabled: i18n.language === 'pt',
    onClick: () => i18n.changeLanguage('pt'),
  } as ButtonParameters;

  const stackProps = {
    direction: { md: 'row-reverse', lg: 'row-reverse', xl: 'row-reverse' },
    my: { xs: 2, sm: 2, md: 4, lg: 5, xl: 6 },
    spacing: { xs: 2, sm: 2, md: 2, lg: 1, xl: 2 },
  } as StackParameters;

  return (
    <Stack {...stackProps}>
      <Button {...languageEnglishProps}>{t('language.english')}</Button>
      <Button {...languagePortugueseProps}>{t('language.portuguese')}</Button>
    </Stack>
  );
}
