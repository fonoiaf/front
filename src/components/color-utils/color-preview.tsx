import { forwardRef } from 'react';

import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from '#/utils/styles';

import type { ColorPreviewProps } from './types';

export const ColorPreview = forwardRef<HTMLDivElement, BoxProps & ColorPreviewProps>(
  ({ colors, limit = 3, sx, ...other }, ref) => {
    const theme = useTheme();

    const colorsRange = colors.slice(0, limit);
    const restColors = colors.length - limit;

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          ...sx,
        }}
        {...other}
      >
        {colorsRange.map((color, index) => (
          <Box
            key={color + index}
            sx={{
              ml: -0.75,
              width: 16,
              height: 16,
              bgcolor: color,
              borderRadius: '50%',
              border: `solid 2px ${theme.vars.palette.background.paper}`,
              boxShadow: `inset -1px 1px 2px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
            }}
          />
        ))}

        {colors.length > limit && (
          <Box component="span" sx={{ typography: 'subtitle2' }}>{`+${restColors}`}</Box>
        )}
      </Box>
    );
  }
);
