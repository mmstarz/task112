import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  centered: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
      ...theme.typography.regular18,
      textDecoration: 'none',
      color: theme.colors.primary,
      marginTop: '8px',
    },
  },
  w100: {
    width: '100%',
  },
  h100: {
    height: '100%',
    minHeight: 'calc(100vh - 84px)',
  },
  text1: {
    ...theme.typography.bold24,
    color: theme.colors.white,
  },
}));

export default useStyles;
