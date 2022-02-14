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
    '& .MuiAvatar-root': {
      width: '240px',
      height: '240px',
      objectFit: 'contain',
      display: 'grid',
    },
  },
  gap8: { gap: '8px' },
  avatar: {
    width: '240px',
    height: '240px',
    objectFit: 'contain',
  },
}));

export default useStyles;
