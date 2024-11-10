import * as React from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui6/material/IconButton';
import { alpha, styled } from '@mui6/material/styles';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const { t } = useTranslation('home');
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      id="appbar"
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 10,
        marginTop: '20px',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small" href="#features">
                {t('appbar.features')}
              </Button>
              <Button variant="text" color="info" size="small" href="#testimonials">
                {t('appbar.testimonials')}
              </Button>
              <Button variant="text" color="info" size="small" href="#highlights">
                {t('appbar.hightlights')}
              </Button>
              <Button variant="text" color="info" size="small" href="#pricing">
                {t('appbar.pricing')}
              </Button>
              <Button variant="text" color="info" size="small" href="#faq" sx={{ minWidth: 0 }}>
                {t('appbar.faq')}
              </Button>
              <Button variant="text" color="info" size="small" href="#blog" sx={{ minWidth: 0 }}>
                {t('appbar.blog')}
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button color="primary" variant="text" size="small" href="/sign-in">
              {t('appbar.signIn')}
            </Button>
            <Button color="primary" variant="contained" size="small" href="/sign-in">
              {t('appbar.signUp')}
            </Button>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem>{t('appbar.features')}</MenuItem>
                <MenuItem>{t('appbar.testimonials')}</MenuItem>
                <MenuItem>{t('appbar.hightlights')}</MenuItem>
                <MenuItem>{t('appbar.pricing')}</MenuItem>
                <MenuItem>{t('appbar.faq')}</MenuItem>
                <MenuItem>{t('appbar.blog')}</MenuItem>
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth href="/sign-in">
                    {t('appbar.signIn')}
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth href="/sign-in">
                    {t('appbar.signUp')}
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
