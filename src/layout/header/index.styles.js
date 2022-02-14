import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  gap8: { gap: '8px' },
}));

export default useStyles;
