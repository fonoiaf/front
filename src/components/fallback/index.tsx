import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from '#/utils/styles';

export const Fallback = () => {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
      <LinearProgress
        sx={{
          width: 1,
          maxWidth: 320,
          bgcolor: varAlpha(theme?.vars?.palette?.text?.primaryChannel, 0.16),
          [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
        }}
      />
    </Box>
  );
};
