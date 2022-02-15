import React from 'react';

import { createTheme } from '@mui/material/styles';

const primary = '#2E2E8E';
const secondary = '#4CAF50';
const secondaryHover = '#469D4A';

const white = '#FFFFFF';
const red = '#D32828';
const yellow = '#FF8F00';

const grey10 = '#FAFAFD';
const grey20 = '#EDEEF5';
const grey30 = '#DBDCE4';
const grey50 = '#C4C6D2';
const grey60 = '#8B8D9E';
const grey70 = '#696B77';
const grey80 = '#4F5262';
const grey90 = '#373540';
const grey100 = '#222124';

const theme = createTheme({
  colors: {
    primary,
    secondary,
    secondaryHover,
    white,
    red,
    yellow,
    grey10,
    grey20,
    grey30,
    grey50,
    grey60,
    grey70,
    grey80,
    grey90,
    grey100,
  },
  breakpoints: {
    values: {
      xs: 432,
      sm: 600,
      md: 1340,
      lg: 1500,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    regular12: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
    },
    regular14: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
    },
    regular16: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '22px',
    },
    regular18: {
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '24px',
    },
    medium10: {
      fontWeight: 500,
      fontSize: '10px',
      lineHeight: '14px',
    },
    medium12: {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
    },
    medium14: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
    },
    medium16: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '22px',
    },
    medium18: {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '24px',
    },
    medium20: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '28px',
    },
    medium24: {
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '32px',
    },
    bold10: {
      fontWeight: 700,
      fontSize: '10px',
      lineHeight: '14px',
    },
    bold12: {
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px',
    },
    bold14: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '20px',
    },
    bold18: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '24px',
    },
    bold20: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '28px',
    },
    bold24: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '32px',
    },
  },
});

export const appTheme = createTheme(theme, {
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation12: {
          boxShadow: '0px 4px 60px rgba(43, 57, 144, 0.06)',
          borderRadius: '16px',
        },
      },
      defaultProps: {
        variant: 'elevation',
        elevation: 12,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          ...theme.typography.medium14,
          color: theme.colors.secondary,
          cursor: 'pointer',
          textDecoration: 'none',
        },
      },
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.colors.grey100,
        },
        arrow: {
          color: theme.colors.grey100,
        },
      },
      defaultProps: {
        arrow: true,
        placement: 'left',
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.colors.primary,
          [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
            height: '100%',
            width: 'auto',
            left: 0,
            right: 'auto',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          flexDirection: 'row',
          padding: '20px 16px',
          [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
            minHeight: '100vh',
            padding: '12px',
            flexDirection: 'column',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: theme.colors.primary,
        },
      },
    },
  },
});
