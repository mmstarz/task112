import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      // gap: '4px',
    },
    '& a': {
      textDecoration: 'none',
      color: theme.colors.primary,
    },
  },
  w100: { width: '100%' },
  padd4: { padding: '8px 4px' },
  text1: {
    ...theme.typography.regular14,
    color: theme.colors.white,
  },
}));

export default useStyles;
