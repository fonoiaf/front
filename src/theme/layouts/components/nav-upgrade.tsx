import type { StackProps } from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { textGradient } from '#/utils/mixins';
// ----------------------------------------------------------------------

export function NavUpgrade({ sx, ...other }: StackProps) {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ mb: 4, textAlign: 'center', ...sx }}
      {...other}
    >
      <Typography
        variant="h6"
        sx={{
          ...textGradient(
            `to right, ${(theme.vars || theme).palette.secondary.main}, ${(theme.vars || theme).palette.warning.main}`
          ),
        }}
      >
        More features?
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
        {`From only `}
        <Box component="strong" sx={{ color: 'text.primary' }}>
          $69
        </Box>
      </Typography>

      <Box
        component="img"
        alt="Minimal dashboard"
        src="/assets/illustrations/illustration-dashboard.webp"
        sx={{ width: 200, my: 2 }}
      />

      <Button
        href="https://material-ui.com/store/items/minimal-dashboard/"
        target="_blank"
        variant="contained"
        color="inherit"
      >
        Upgrade to Pro
      </Button>
    </Box>
  );
}
