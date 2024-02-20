import { Box } from "@mui/system";
import useStyles from "./styles";
import { IconButton } from "@mui/material";
import { socialInfos } from "./SocialProps";

const Socials = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {socialInfos.map(({ ariaLabel, href, Icon }) => (
        <IconButton
          key={ariaLabel}
          aria-label={ariaLabel}
          color="primary"
          href={href}
          target="_blanck"
        >
          <Icon />
        </IconButton>
      ))}
    </Box>
  )
}

export default Socials;