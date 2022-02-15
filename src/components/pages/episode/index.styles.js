import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gap8: { gap: '8px' },
  w100: { width: '100%' },
  h100: { height: '100%', minHeight: 'calc(100vh - 60px)' },
  padd4: { padding: '8px 4px' },
  padd24: { padding: '24px' },
  mbot8: { marginBottom: '8px' },
  text1: {
    ...theme.typography.regular16,
    color: theme.colors.white,
  },
  text2: {
    ...theme.typography.bold18,
    color: theme.colors.white,
  },
  links: {
    padding: '4px 0px',
    '& a': {
      textDecoration: 'none',
      color: theme.colors.primary,
    },
  },
}));

export default useStyles;
