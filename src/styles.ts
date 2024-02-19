import { Theme } from "@emotion/react";
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: '#fff',
  }
}));

export default useStyles;