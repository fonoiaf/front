import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import Grid from '@mui/material/Grid2';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';


export default function Highlights() {
  const { t } = useTranslation('home');

  const items = [
    {
      icon: <SettingsSuggestRoundedIcon />,
      title: t('highlights.items.performance.title'),
      description: t('highlights.items.performance.description'),
    },
    {
      icon: <ConstructionRoundedIcon />,
      title: t('highlights.items.made.title'),
      description: t('highlights.items.made.description'),
    },
    {
      icon: <ThumbUpAltRoundedIcon />,
      title: t('highlights.items.experience.title'),
      description: t('highlights.items.experience.description'),
    },
    {
      icon: <AutoFixHighRoundedIcon />,
      title: t('highlights.items.innovative.title'),
      description: t('highlights.items.innovative.description'),
    },
    {
      icon: <SupportAgentRoundedIcon />,
      title: t('highlights.items.support.title'),
      description: t('highlights.items.support.description'),
    },
    {
      icon: <QueryStatsRoundedIcon />,
      title: t('highlights.items.precision.title'),
      description: t('highlights.items.precision.description'),
    },
  ];

  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            {t('highlights.title')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          {t('highlights.description')}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            // <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Grid xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
