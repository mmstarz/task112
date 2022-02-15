import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  w100: { width: '100%' },
  mh100: { minHeight: '100vh' },
  gap24: { gap: '24px' },
  bg: { backgroundColor: theme.colors.secondary },
}));

export default useStyles;
