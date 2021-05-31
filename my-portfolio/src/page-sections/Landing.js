import { createStyles, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: "relative",
      minHeight: "100vh"
    },
    textContent: {
      width: "100%",
      padding: theme.spacing(0, 4),
      textAlign: "center",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)"
    },
    redText: {
      color: theme.palette.common.red
    }
  })
);

const Landing = () => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.root + " page-section"}>
      <div className={classes.textContent}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Typography className="headline" color="secondary" variant="h2" gutterBottom>
            Hi there!
          </Typography>
        </Slide>

        <Typography className="headline" color="secondary" variant="h2" gutterBottom>
          My name is <span className={classes.redText}>Mustafa</span>
        </Typography>

        <Typography className="headline" color="secondary" variant="h2" gutterBottom>
          A <span className={classes.redText}>Fullstack JavaScript</span> <br /> Web Developer
        </Typography>
      </div>
    </div>
  );
};

export default Landing;
