import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
  },
  grow: { flexGrow: '1' },
  container1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backdropFilter: 'grayscale(1)',
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  },
  container3: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      alignItems: 'flex-start',
    },
  },
  gap4: { gap: '4px' },
  gap8: { gap: '8px' },
  w100: { width: '100%' },
  h100: { height: '100%', minHeight: 'calc(100vh - 60px)' },
  padd8: { padding: '8px' },
  avatar: {
    width: '240px',
    height: '240px',
    borderRadius: '0px 16px 16px 0px',
    filter: 'drop-shadow(2px 4px 6px black)',
    '& img': {
      objectFit: 'fill',
    },
  },
  bg: {
    height: '100%',
    overflow: 'hidden',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  text1: {
    ...theme.typography.regular16,
    color: theme.colors.white,
  },
  text2: {
    ...theme.typography.medium18,
    color: theme.colors.secondary,
  },
}));

export default useStyles;
