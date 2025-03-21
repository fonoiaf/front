import { useState, useCallback } from 'react';

import type { ButtonProps } from '@mui/material/Button';

import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import MenuList from '@mui/material/MenuList';
import { useTheme } from '@mui/material/styles';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';

import { varAlpha } from '#/utils/styles';

import { Iconify } from '#/components/iconify';

// ----------------------------------------------------------------------

type PostSortProps = ButtonProps & {
  sortBy: string;
  onSort: (newSort: string) => void;
  options: { value: string; label: string }[];
};

export function PostSort({ options, sortBy, onSort, sx, ...other }: PostSortProps) {
  const theme = useTheme();

  const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenPopover(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        onClick={handleOpenPopover}
        endIcon={
          <Iconify
            icon={openPopover ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'}
            sx={{
              ml: -0.5,
            }}
          />
        }
        sx={{
          // bgcolor: varAlpha((theme.vars || theme).palette.grey['500'], 0.08),
          bgcolor: varAlpha((theme.vars || theme).palette.grey['500Channel'], 0.08),
          ...sx,
        }}
        {...other}
      >
        {options.find((option) => option.value === sortBy)?.label}
      </Button>

      <Popover
        open={!!openPopover}
        anchorEl={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuList
          disablePadding
          sx={{
            p: 0.5,
            gap: 0.5,
            width: 160,
            display: 'flex',
            flexDirection: 'column',
            [`& .${menuItemClasses.root}`]: {
              px: 1,
              gap: 2,
              borderRadius: 0.75,
              [`&.${menuItemClasses.selected}`]: { bgcolor: 'action.selected' },
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === sortBy}
              onClick={() => {
                onSort(option.value);
                handleClosePopover();
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
}
