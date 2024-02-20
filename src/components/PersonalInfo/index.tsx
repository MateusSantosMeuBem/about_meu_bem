import { Box } from "@mui/system";
import useStyles from "./styles";
import Socials from "../Socials";

const PersonalInfo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img
        src="https://github.com/mateussantosmeubem.png"
        className={classes.avatar}
      />
      <h1>Mateus Santos</h1>
      <Socials />
    </Box>
  )
}

export default PersonalInfo;