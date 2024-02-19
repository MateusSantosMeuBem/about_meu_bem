import './App.css';
import { Box } from '@mui/material';
import PersonalInfo from './components/PersonalInfo';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <PersonalInfo />
    </Box>  
  );
}

export default App;
