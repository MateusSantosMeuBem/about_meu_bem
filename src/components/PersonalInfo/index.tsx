import { Box } from "@mui/system";
import useStyles from "./styles";

const PersonalInfo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img
        src="https://github.com/mateussantosmeubem.png"
        className={classes.avatar}
      />
      <h2>Mateus Santos Mendonça</h2>
    </Box>
  )
}

export default PersonalInfo;