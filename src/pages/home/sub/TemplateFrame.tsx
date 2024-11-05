// import type { PaletteMode } from '@mui/material/styles';
import type { SelectChangeEvent } from '@mui/material/Select';

import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import getMPTheme from './theme/getMPTheme';
import ToggleColorMode from './components/ToggleColorMode';

export type PaletteMode = 'light' | 'dark';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  backgroundImage: 'none',
  zIndex: theme.zIndex.drawer + 1,
  flex: '0 0 auto',
}));

interface TemplateFrameProps {
  mode: PaletteMode;
  showCustomTheme: boolean;
  children: React.ReactNode;
  toggleColorMode: () => void;
  toggleCustomTheme: (theme: boolean) => void;
}

export default function TemplateFrame({
  mode,
  children,
  showCustomTheme,
  toggleColorMode,
  toggleCustomTheme,
}: TemplateFrameProps) {
  const { t } = useTranslation('home');

  const handleChange = (event: SelectChangeEvent) => {
    toggleCustomTheme(event.target.value === 'custom');
  };
  const MPTheme = createTheme(getMPTheme(mode));

  return (
    <ThemeProvider theme={MPTheme}>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <StyledAppBar>
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              p: '8px 12px',
            }}
          >
            <Button
              hidden
              size="small"
              component="a"
              variant="text"
              aria-label="Back to templates"
              startIcon={<ArrowBackRoundedIcon />}
              href="/material-ui/getting-started/templates/"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {t('appbar.back')}
            </Button>
            <IconButton
              size="small"
              aria-label="Back to templates"
              component="a"
              href="/material-ui/getting-started/templates/"
              sx={{ display: { xs: 'auto', sm: 'none' } }}
            >
              <ArrowBackRoundedIcon />
            </IconButton>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <FormControl variant="outlined" sx={{ minWidth: 180 }}>
                <Select
                  size="small"
                  labelId="theme-select-label"
                  id="theme-select"
                  value={showCustomTheme ? 'custom' : 'material'}
                  onChange={handleChange}
                  label="Design Language"
                >
                  <MenuItem value="custom">{t('appbar.custom-theme')}</MenuItem>
                  <MenuItem value="material">{t('appbar.material-theme')}</MenuItem>
                </Select>
              </FormControl>
              <ToggleColorMode
                data-screenshot="toggle-mode"
                mode={mode}
                toggleColorMode={toggleColorMode}
              />
            </Box>
          </Toolbar>
        </StyledAppBar>
        <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}
