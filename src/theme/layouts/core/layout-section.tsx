import type { Theme, SxProps, CSSObject } from '@mui/material/styles';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

import { varAlpha } from '#/utils/styles';

import { layoutClasses } from '../classes';

// ----------------------------------------------------------------------

export type LayoutSectionProps = {
  sx?: SxProps<Theme>;
  cssVars?: CSSObject;
  children?: React.ReactNode;
  footerSection?: React.ReactNode;
  headerSection?: React.ReactNode;
  sidebarSection?: React.ReactNode;
};

export function LayoutSection({
  sx,
  cssVars,
  children,
  footerSection,
  headerSection,
  sidebarSection,
}: LayoutSectionProps) {
  const theme = useTheme();

  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        body: {
          // nav
          '--layout-nav-bg': theme?.vars?.palette?.common?.white,
          '--layout-nav-border-color': varAlpha(theme?.vars?.palette?.grey['500Channel'], 0.08),
          '--layout-nav-zIndex': 1101,
          '--layout-nav-mobile-width': '320px',
          // nav item
          '--layout-nav-item-height': '44px',
          '--layout-nav-item-color': theme?.vars?.palette?.text?.secondary,
          '--layout-nav-item-active-color': theme?.vars?.palette?.primary?.main,
          '--layout-nav-item-active-bg': varAlpha(theme?.vars?.palette?.primary?.mainChannel, 0.08),
          '--layout-nav-item-hover-bg': varAlpha(theme?.vars?.palette?.primary?.mainChannel, 0.16),
          // header
          '--layout-header-blur': '8px',
          '--layout-header-zIndex': 1100,
          '--layout-header-mobile-height': '64px',
          '--layout-header-desktop-height': '72px',
          ...cssVars,
        },
      }}
    />
  );

  return (
    <>
      {inputGlobalStyles}

      <Box id="root__layout" className={layoutClasses.root} sx={sx}>
        {sidebarSection}
        <Box
          display="flex"
          flex="1 1 auto"
          flexDirection="column"
          className={layoutClasses.hasSidebar}
        >
          {headerSection}
          {children}
          {footerSection}
        </Box>
      </Box>
    </>
  );
}
