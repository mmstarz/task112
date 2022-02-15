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
    justifyContent: 'flex-start',
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& button': {
      color: theme.colors.white,
      '& svg': {
        '& *': {
          stroke: theme.colors.white,
        },
      },
    },
  },
  w100: { width: '100%' },
  gap8: { gap: '8px' },
  padd24: { padding: '24px' },
  mtopAuto: {
    marginTop: 'auto',
  },
  text1: {
    ...theme.typography.regular18,
    color: theme.colors.white,
    textAlign: 'center',
  },
}));

export default useStyles;
