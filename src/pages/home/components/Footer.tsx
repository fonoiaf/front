import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import SitemarkIcon from './SitemarkIcon';

function Copyright() {
  const { t } = useTranslation('home');

  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="fonoia.com.br">
        {t('footer.title')}
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const { t } = useTranslation('home');

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <SitemarkIcon />
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              {t('footer.newsletter')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              {t('footer.newsletterDescription')}
            </Typography>
            <InputLabel htmlFor="email-newsletter">Email</InputLabel>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label={t('commons.email.ariaLabel') || 'Enter your email address'}
                placeholder={t('commons.email.placeholder') || 'Your email address'}
                aria-autocomplete="none"
                // autoComplete="off"
                // slotProps={{
                //   htmlInput: {
                //     autoComplete: 'off',
                //     'aria-label': 'Enter your email address',
                //   },
                // }}
                sx={{ width: '250px' }}
              />
              <Button variant="contained" color="primary" size="small" sx={{ flexShrink: 0 }}>
                {t('footer.subscribe')}
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            {t('footer.product')}
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            {t('appbar.features')}
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            {t('appbar.testimonials')}
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            {t('appbar.hightlights')}
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            {t('appbar.pricing')}
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            {t('appbar.faq')}
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            {t('footer.company.title')}
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            {t('footer.company.about')}
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            {t('footer.company.carrers')}
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            {t('footer.company.press')}
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            {t('footer.legal.title')}
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            {t('footer.legal.terms')}
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            {t('footer.legal.privacy')}
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            {t('footer.legal.contact')}
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            {t('footer.copyright.policy')}
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>
          <Link color="text.secondary" variant="body2" href="#">
            {t('footer.copyright.terms')}
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/fonoiaf/"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.instagram.com/fono_iaf/"
            aria-label="Instagram"
            sx={{ alignSelf: 'center' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.facebook.com/company/fonoiaf/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
