import { Helmet } from 'react-helmet-async';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/config-global';
import { useRouter } from 'src/hooks/use-router';
import { Iconify } from 'src/components/iconify';

export default function SignIn() {
  const router = useRouter();
  const { t } = useTranslation('signIn');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = useCallback(() => {
    router.push('/dashboard');
  }, [router]);

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <TextField
        fullWidth
        name="email"
        label={t('fields.email') || 'Email address'}
        defaultValue="hello@gmail.com"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />

      <Link variant="body2" color="inherit" sx={{ mb: 1.5 }}>
        {t('forgot')}
      </Link>

      <TextField
        fullWidth
        name="password"
        label={t('fields.password') || 'Password'}
        defaultValue="@demo1234"
        InputLabelProps={{ shrink: true }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={handleSignIn}
      >
        {t('next')}
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <Helmet>
        <title> {`${t('helmet')} - ${CONFIG.appName}`}</title>
      </Helmet>

      <>
        <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
          <Typography variant="h5">{t('title')}</Typography>
          <Typography variant="body2" color="text.secondary">
            {t('account')}
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              {t('guide')}
            </Link>
          </Typography>
        </Box>

        {renderForm}

        <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}
          >
            {t('other')}
          </Typography>
        </Divider>

        <Box gap={1} display="flex" justifyContent="center">
          <IconButton color="inherit">
            <Iconify icon="logos:google-icon" />
          </IconButton>
          <IconButton color="inherit">
            <Iconify icon="eva:github-fill" />
          </IconButton>
          <IconButton color="inherit">
            <Iconify icon="ri:twitter-x-fill" />
          </IconButton>
        </Box>
      </>
    </>
  );
}
