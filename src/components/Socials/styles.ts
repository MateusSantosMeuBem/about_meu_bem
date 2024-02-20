import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
}));

export default useStyles;