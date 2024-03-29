import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  avatar: {
    borderRadius: '100%',
    aspectRatio: 1,
    width: 200,
    border: `2px solid #fff`,
  }
}));

export default useStyles;