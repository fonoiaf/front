import type { Stack, Button, Typography } from '@mui/material';

export type ButtonParameters = Parameters<typeof Button>[0];
export type StackParameters = Parameters<typeof Stack>[0];
export type TypographyParameters = Parameters<typeof Typography>[0];

export type PaletteMode = 'light' | 'dark';
