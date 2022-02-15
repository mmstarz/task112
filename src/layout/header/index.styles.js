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
    justifyContent: 'flex-start',
    background: `${theme.colors.primary}`,
    boxShadow: `-1px 0px 0px inset ${theme.colors.primary}`,
  },
  gap8: { gap: '8px' },
  w100: { width: '100%' },
  padd: { padding: '18px 24px' },
  text1: {
    ...theme.typography.bold18,
    color: theme.colors.white,
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      '& *': {
        stroke: theme.colors.grey50,
      },
    },
  },
}));

export default useStyles;
